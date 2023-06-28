import React from 'react'
import './App.css'
import Acсordion from "./Acсordion";
import {Reting} from "./components/Reting";
import OnOff from './components/OnOff/OnOff';


function App() {
    console.log('App render')
    return (
        <div>
            <input value={"yo"} type={"password"}/>
            App title
            <PageTitle title={"App title"}/>
            <Reting value={0}/>
            <Reting value={1}/>
            <Reting value={2}/>
            <Reting value={3}/>
            <Reting value={4}/>
            <Reting value={5}/>
            <PageTitle title={"App title@"}/>
            <Acсordion  titleValue={"Acсordion title"} collapsed={false}/>
            <Acсordion  titleValue={"Acсordion title2"} collapsed={true}/>
            <OnOff toggle={true}  />
        </div>
    )
}

type PageTitlePropsType ={
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    return <div>
        <h1>props.title</h1>
    </div>
}

export default App