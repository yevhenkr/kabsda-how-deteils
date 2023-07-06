import React from 'react'
import '../../App.css'

type AcсordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Acсordion(props: AcсordionPropsType) {
        return <>
            <AcсordionTitle titleValue={props.titleValue}/>
            {!props.collapsed && <AcсordionBody/>}
        </>
}

type AcсordionTitlePropsType = {
    titleValue: string
}

function AcсordionTitle(props: AcсordionTitlePropsType) {
    return <h3>{props.titleValue}</h3>
}

function AcсordionBody() {
    console.log("AccordionBody")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Acсordion