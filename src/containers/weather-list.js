/**
 * Created by Koleda_D on 31.05.2017.
 */
import React from 'react';
import {connect} from 'react-redux';

class WeatherList extends React.Component {
    renderWeatherRow(cityData) {
        const cityName = cityData.city.name;
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
            </tr>
        );
    }

    render(){
        return (
          <table className="table table-hover">
              <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
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