/**
 * Created by Koleda_D on 31.05.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import SparkChart from '../components/spark-chart';

class WeatherList extends React.Component {
    renderWeatherRow(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp);
        const tempsInCelsius = temps.map( value => value - 273);
        const humidities = cityData.list.map( weather => weather.main.humidity);
        const pressures = cityData.list.map( weather => weather.main.pressure);

        return (
            <tr key={cityName}>
                <td>
                    {cityName}
                    </td>
                <td>
                    <SparkChart data={tempsInCelsius} color="red" units="C"/>
                </td>
                <td>
                    <SparkChart data={humidities} color="blue" units="hPa"/>
                </td>
                <td>
                    <SparkChart data={pressures} color="orange" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
          <table className="table table-hover">
              <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
              </thead>
              <tbody>
                {this.props.weather.map(this.renderWeatherRow)}
              </tbody>
          </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // { weather : weather }
}

export default connect(mapStateToProps)(WeatherList);