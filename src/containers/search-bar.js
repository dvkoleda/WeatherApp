/**
 * Created by Koleda_D on 29.05.2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../ducks/weather-widget';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState( {term: event.target.value} );
    }

    onFormSubmit(event) {
        event.preventDefault();
        //load weather data here
        this.props.fetchWeather(this.state.term);
        this.setState( {term: ''} );
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in you favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}

export default connect(null,{fetchWeather: fetchWeather})(SearchBar);