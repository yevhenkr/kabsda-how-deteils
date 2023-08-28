import React, { useState} from 'react';

export default {
    title: 'useState demo'
}

function hardCalculation() {
    console.log("hardCalculation")
    return 1234354545
}

export const Example1 = () => {
    let count = hardCalculation()
    const [counterHard, setCounterHard] = useState(count)
    //если передать в инициализацию фукнкцию то useState сохранит єто значение и небудет візівать єту тяжолую функцию повторно
    const [counter, setCounter] = useState(hardCalculation)

    const [counterWithChanger, setCounterWithChanger] = useState(hardCalculation)
    const changer = (state: number) => { //set воспримит ее как функцию в которую предвется текущее значение и возвращаеться результат функции
        return state + 1
    }
    return <>
        <button onClick={() => setCounterHard(counterHard + 1)}>+</button>
        {counterHard}
        <hr/>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <hr/>
        <button onClick={() => setCounterWithChanger(changer)}>+</button>
        {counterWithChanger}
        {/*// равноценная запись*/}
        <button onClick={() => setCounterWithChanger(state => state + 1)}>+</button>
        {counterWithChanger}
    </>
}