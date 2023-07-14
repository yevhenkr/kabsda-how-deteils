import React, {useState} from 'react'
import '../../App.css'


type AcсordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export default function Aсcordion(props: AcсordionPropsType) {

    return <>
        <AcсordionTitle onChange={props.onChange} titleValue={props.titleValue}/>
        {props.collapsed && <AcсordionBody/>}
    </>
}

function AcсordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

type AcсordionTitlePropsType = {
    titleValue: string
    onChange: () => void
}

function AcсordionTitle(props: AcсordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.titleValue}</h3>
}