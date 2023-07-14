import React, {useState} from 'react';

export function UncontrolReting() {
    let [star, setStar] = useState(0)
    return (
        <div>
            <Star selected={star >= 1} setValue={()=>setStar(1)}/>
            <Star selected={star >= 2} setValue={()=>setStar(2)}/>
            <Star selected={star >= 3} setValue={()=>setStar(3)}/>
            <Star selected={star >= 4} setValue={()=>setStar(4)}/>
            <Star selected={star >= 5} setValue={()=>setStar(5)}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StartPropsType) {
    return <span onClick={() => props.setValue}>
        {props.selected ? <b>star </b> : 'star'}
    </span>
}