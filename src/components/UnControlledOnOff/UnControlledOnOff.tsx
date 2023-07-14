import React, {useState} from 'react'

type PropsType = {
    onChange: (col: boolean) => void
}

export default function UnControlledOnOff(props: PropsType) {
    let [on, setOn] = useState(true)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '3Opx',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red'
    }

    const onCklicked = () => {
        props.onChange(true)
    }
    const offCklicked = () => {
        props.onChange(false)
    }
    return <div>
        <div style={onStyle} onClick={onCklicked}>On</div>
        <div style={offStyle} onClick={offCklicked}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}