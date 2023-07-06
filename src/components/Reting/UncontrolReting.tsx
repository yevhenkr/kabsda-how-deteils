import React, {useState} from 'react';

type RatingPropsTipe = {}

export function UncontrolReting() {
    let [star, setStar] = useState(0)
    const onClickHandler = (starNumber: number) => {
        setStar(starNumber)
    }
    return (
        <div>
            <Star selected={star >= 0} callback={()=>onClickHandler(0)} />
            <Star selected={star >= 1}  callback={()=>onClickHandler(1)}/>
            <Star selected={star >= 2}  callback={()=>onClickHandler(2)}/>
            <Star selected={star >= 3}  callback={()=>onClickHandler(3)}/>
            <Star selected={star >= 4}  callback={()=>onClickHandler(4)}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    callback: ()=>void
}
function Star(props: StartPropsType) {
    const onClick = () => {
        props.callback()
    }
    return props.selected ? <span onClick={onClick}><b>star </b></span> : <span onClick={onClick}>star </span>
}