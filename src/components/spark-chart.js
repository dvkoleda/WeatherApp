/**
 * Created by Koleda_D on 01.06.2017.
 */
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class SparkChart extends React.Component {
    render() {
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                </Sparklines>
            </div>
        );
    }
}

export default SparkChart;