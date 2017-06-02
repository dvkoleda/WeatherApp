/**
 * Created by Koleda_D on 01.06.2017.
 */
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


class SparkChart extends React.Component {

    average(data) {
        return _.round(_.sum(data)/data.length);
    }

    render() {
        return (
            <div>
                <Sparklines  width={200} height={120} data={this.props.data}>
                    <SparklinesLine color={this.props.color}/>
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>{this.average(this.props.data)} {this.props.units}</div>
            </div>
        );
    }
}

export default SparkChart;