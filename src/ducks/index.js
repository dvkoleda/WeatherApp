/**
 * Created by Koleda_D on 30.05.2017.
 */


import { combineReducers } from 'redux';
import weatherReducer from './weather-widget';

/**
 *  This is the application state combined from all 'ducks' components.
 */

const rootReducer = combineReducers({
    weather: weatherReducer
});

export default rootReducer;

