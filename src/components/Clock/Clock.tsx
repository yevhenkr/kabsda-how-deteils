import React from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    digitalMode: boolean
}

export const Clock: React.FC<PropsType> = ({digitalMode}) => {
    let date = new Date()
    let view;
    switch (digitalMode) {
        case true:
            view = <DigitalClockView/>
            break
        case false:
        default:
            view = <AnalogClockView/>
    }
    return <div>
        {view}
    </div>
}