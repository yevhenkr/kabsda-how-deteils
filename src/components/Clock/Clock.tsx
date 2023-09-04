import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = () => {
    const [data, setData] = useState(new Date())

    const get2digitsString = (num: number) => num < 10 ? "0" + num : num

    useEffect(() => {
        const intervalId = setInterval(() => {
            setData(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return <div>
        <span>{get2digitsString(data.getHours())}</span>
        :
        <span>{get2digitsString(data.getMinutes())}</span>
        :
        <span>{get2digitsString(data.getSeconds())}</span>
    </div>
}