import React, {useState} from 'react'
import '../../App.css'

type AcсordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontroldAcсordion(props: AcсordionPropsType) {
    let[collapsed, setCollapsed]=useState(false)
    const collapsedHandler=()=>{
        setCollapsed(!collapsed)
    }
        return <>
            <button onClick={collapsedHandler}>x</button>
            <AcсordionTitle titleValue={props.titleValue}/>
            {/*{!props.collapsed && <AcсordionBody/>}*/}
            {collapsed  && <AcсordionBody/> }
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

export default UncontroldAcсordion