import React, {useState} from 'react'
import './App.css'
import Aсcordion from './components/Accordion/Aсcordion';
import {RatingValueType, Reting} from './components/Reting/Reting';
import OnOff from './components/OnOff/OnOff';
import UncontroldAcсordion from './components/Accordion/UncontroldAcсordion';
import {UncontrolReting} from './components/Reting/UncontrolReting';


function App() {
    console.log('App render')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionState, accordionStateSet] = useState(false)
    return (
        <div>
            <Aсcordion titleValue="Acordion title2"/>

            {/*<UncontroldAcсordion  titleValue={"Acсordion title"}/>*/}
            {/*<UncontrolReting />*/}
            {/*    <Acсordion  titleValue={"Acсordion title2"} callBack={accordionStateSet(!ratingValue)} />*/}
            {/*<Reting value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<input value={"yo"} type={"password"}/>*/}
            {/*App title*/}
            {/*<PageTitle title={"App title"}/>*/}
            {/*<Reting value={0}/>*/}
            {/*<Reting value={1}/>*/}
            {/*<Reting value={2}/>*/}
            {/*<Reting value={3}/>*/}
            {/*<Reting value={4}/>*/}
            {/*<Reting value={5}/>*/}
            {/*<PageTitle title={"App title@"}/>*/}
            {/*<OnOff toggle={true}  />*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <div>
        <h1>props.title</h1>
    </div>
}

export default App