import React from "react";

type RatingPropsTipe = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Reting(props: RatingPropsTipe) {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={props.value >0}/>
                <Star selected={props.value >1}/>
                <Star selected={props.value >2}/>
                <Star selected={props.value >3}/>
                <Star selected={props.value >4}/>
            </div>
        )
}

type StartPropsType = {
    selected: boolean
}

function Star(props: StartPropsType) {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}