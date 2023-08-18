import React, {useMemo, useState} from 'react';

export default {
    title: 'ReactMemm'
}

const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

export const DifficultCounting = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])

    for (let i = 1; i <= a; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a:{resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    return <div>{
        props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret) //Users'component' в Exampele'component' не пересуеться если в него не прийдут новіен Props

export const HalpsReactMemo = () => {
    console.log('HalpsReactMemo')

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Dimich', 'Eugena', 'Serga'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users])

    const addUser = () => { //Users пересуеться
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }
    return <>
        <button onClick={() => {setCounter(counter + 1)}}>Add</button>
        <button onClick={() => addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}