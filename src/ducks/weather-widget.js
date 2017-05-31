/**
 * Created by Koleda_D on 30.05.2017.
 */
import weatherService from '../services/weather-service';

//action types
const FETCH_WEATHER = 'FETCH_WEATHER';

//reduce function
export default function reduce(state = [], action) {
    const reactOnAction = actionsMap[action.type];
    return reactOnAction ? reactOnAction(state, action) : state;
}

//action creators
export function fetchWeather(city) {
    return {
        type: FETCH_WEATHER,
        payload: weatherService.requestWeather(city)
    };
}

const actionsMap = {
    FETCH_WEATHER : (state, action) => [ action.payload.data, ...state ]
};