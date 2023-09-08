import React from 'react';
import {Clock} from "./Clock"
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

export default {
    title: 'Clock',
    component: Clock,
    parameters: {
        layout: 'centered',
    },

}
export const BaseExample = () => {


    return <Clock digitalMode={true}/>
}

export const BaseAnalogExample = () => {
    return <AnalogClockView />
}
export const BaseDigitalExample = () => {
    return <DigitalClockView />
}