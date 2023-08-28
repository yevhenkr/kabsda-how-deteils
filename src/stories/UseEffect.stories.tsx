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