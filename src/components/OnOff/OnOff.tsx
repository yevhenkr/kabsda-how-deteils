import React, {useEffect, useState} from 'react'
import './OnOff.css'

type ColorNameType = '' | 'green' | 'red'
type ColorType = {
    btnOn: ColorNameType
    btnOff: ColorNameType
    img: ColorNameType
}

type OnOffType = {
    toggle: boolean
}

function OnOff(props: OnOffType) {
    let [color, setColor] = useState<ColorType>({btnOn: '', btnOff: '', img: ''})

    if (props.toggle) {
        return <>
            <button className={'green'}>On</button>
            <button className={''}>Off</button>
            <span className={'green'}>0</span>
        </>

    } else {
        return <>
            <button className={''}>On</button>
            <button className={'red'}>Off</button>
            <span className={'red'}>0</span>
        </>
    }
}

export default OnOff