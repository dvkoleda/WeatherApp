/**
 * Created by Koleda_D on 30.05.2017.
 */
import axios from 'axios';

const WEATHER_API_KEY = 'ec61a02fba03b9cd0d1369c16fdefe3b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export default {
    requestWeather : (city) => {
        const url = `${ROOT_URL}&q=${city},us`;
        return axios.get(url);
    }
}