/**
 * Created by Koleda_D on 30.05.2017.
 */
import weatherService from '../services/weather-service';

//action types
const FETCH_WEATHER = 'FETCH_WEATHER';

//reduce function
export default function reduce( state = {}, action) {
    return actionsMap[action](state, action) || state;
}

//action creators
export function fetchWeather(city) {
    return {
        type: FETCH_WEATHER,
        payload: weatherService.requestWeather(city)
    };
}

const actionsMap = {
    FETCH_WEATHER : (state, action) => {}
};