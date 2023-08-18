import React, {useState} from 'react'
import './App.css'
import Aсcordion from './components/Accordion/Aсcordion';
import {RatingValueType, Reting} from './components/Reting/Reting';
import OnOff from './components/OnOff/OnOff';
import UncontroldAcсordion from './components/Accordion/UncontroldAcсordion';
import {UncontrolReting} from './components/Reting/UncontrolReting';
import UnControlledOnOff from './components/UnControlledOnOff/UnControlledOnOff';
import {log} from 'util';
import {Select, InputSelectProps} from './components/Select/Select';


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionState, accordionStateSet] = useState(false)
    let [swithOn, setSwithOn] = useState<boolean>(false)

    let [inputSelect, setInputSelect] = useState<string>('option1')
    const options = [
        {value: '1', title: 'Option 1'},
        {value: '2', title: 'Option 2'},
        {value: '3', title: 'Option 3'},
    ];
    let inputSelectDate: InputSelectProps = {
        items: options,
        value: inputSelect,
        onChange: (selectedValue: string) => forInput(selectedValue),
    }

    function forInput(selectedValue: string) {
        setInputSelect(selectedValue)
    }

    return (
        <div>
            {/*<Select items={options} value={inputSelectDate.value} onChange={inputSelectDate.onChange}/>*/}
            {/*<OnOff on={swithOn} onChange={(on)=> {setSwithOn(on)}}/>*/}
            {/*<UnControlledOnOff onChange={(on)=> {setSwithOn(on)}}/>{swithOn.toString()}*/}
            {/*<Aсcordion titleValue="Acordion title2" collapsed={collapsed} onChange={() => {accordionCollabsedSet(!collapsed)}}/>*/}
            {/*<UncontroldAcсordion  titleValue={"User"}/>*/}
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