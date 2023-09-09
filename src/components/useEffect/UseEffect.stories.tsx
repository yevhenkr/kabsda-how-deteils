import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SetTimoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeOutExample")

    useEffect(() => {
        console.log("Effect occurred")
        setInterval(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        })
        //ИСпользуется для очистки сайд єффектов
        return () => {//сработае перд срабатіванием useEffect и когда компонета удаляется
            console.log("Component Anmount")
        };
    }, [counter])

    return <>
        Hello, {counter}
    </>
}