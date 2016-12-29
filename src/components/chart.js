import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function calculateAverage(data) {
    const sum = data.reduce((sum, number) => sum + number, 0);
    return Math.round(sum/data.length);
}

export default (props) => {
    return (
        <div>
            <div>
                <Sparklines svgWidth={180} svgHeight={180} data={props.data}>
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
            </div>
            <div>{calculateAverage(props.data)} {props.unit}</div>
        </div>
    );
}