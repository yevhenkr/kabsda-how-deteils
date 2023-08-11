import React, {useReducer} from 'react'
import '../../App.css'
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AcсordionPropsType = {
    titleValue: string
}

function UncontroldAcсordion(props: AcсordionPropsType) {
    let [state, dispatch] = useReducer(reducer, {collapsed: false}) //установитли инициализированное значение state {collapsed: false}
    return <>
        <AcсordionTitle titleValue={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
        {!state.collapsed && <AcсordionBody/>}
    </>
}

type AcсordionTitlePropsType = {
    titleValue: string
    onClick: () => void
}

function AcсordionTitle(props: AcсordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.titleValue}</h3>
}

function AcсordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontroldAcсordion