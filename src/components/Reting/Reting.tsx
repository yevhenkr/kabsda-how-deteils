import React, {Dispatch, SetStateAction} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: SetStateAction<RatingValueType>) => void
}

export function Reting(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: SetStateAction<RatingValueType>) => void
}

export function Star(props: StartPropsType) {
    console.log(props.value)
    return <span onClick={()=>props.onClick(props.value)}>
        {props.selected ? <b>star </b> : 'star'}
    </span>
}