/**
 * Created by Koleda_D on 02.06.2017.
 */
/**
 * Created by Koleda_D on 01.06.2017.
 */
import React from 'react';

class GoogleMap extends React.Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map , {
            zoom: 12,
            center: {
                lat: this.props.lat,
                log: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;