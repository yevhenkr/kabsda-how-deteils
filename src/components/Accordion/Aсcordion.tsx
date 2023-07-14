import React, {useState} from 'react'
import '../../App.css'


type AcсordionPropsType = {
    titleValue: string
}

export default function Aсcordion(props: AcсordionPropsType) {
let [acсordion, accordionSet]= useState(true)
    const acсordionHandler =()=>{
        accordionSet(!acсordion)
    }
    return <>
        <AcсordionTitle callBack={acсordionHandler} titleValue={props.titleValue}/>
        {acсordion && <AcсordionBody/>}
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
    callBack: ()=>void
}

function AcсordionTitle(props: AcсordionTitlePropsType) {
    return <h3 onClick={props.callBack}>{props.titleValue}</h3>
}