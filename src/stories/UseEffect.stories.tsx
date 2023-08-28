import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    // console.log("SimpleExample")
    //В компоненте запрещено использовать side effect но можно написать их в useEffect
    //при каждой перерировске useEffect срабатівает
    useEffect(() => {
        console.log("useEffect every render")
    })

    useEffect(() => {
        console.log("useEffect only FIRST render")

    }, [])

    useEffect(() => {
        console.log("useEffect counter")
        document.title = counter.toString()
        //apo.getUser().then('')
        //SetInterval
        //document.GetElementId
        //document.title = "User"
    }, [counter]) //додали зависимость тперь useFfect візовется после рендеринга и измениия counter


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <hr/>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>
}

export const SetTimoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    const [timer, setTimer] = useState(1)
    console.log("SetTimeOutExample")
    console.log(new Date().getSeconds())
    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        })
    }, [])
    useEffect(() => {
        setInterval(() => {
            setTimer(new Date().getSeconds())
        }, 1000)
    }, [])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <hr/>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <hr/>
        <hr/>
        Hello, counter: {counter} - fake: {fake}
        <hr/>
        Timer: {timer}
    </>
}