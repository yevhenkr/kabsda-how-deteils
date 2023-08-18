import React, {useState} from 'react';

export default {
    title: 'ReactMemo'
}

const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map((u, i) => <div>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret) //Users'component' в Exampele'component' не пересуеться если в него не прийдут новіен Props

export const Exampele = () => {
    const [counter, setCOunter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['asss', 'gas'])

    const addUser = () => { //Users пересуеться
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }
    return <>
        <button onClick={() => {setCOunter(counter + 1)}}>Add</button>
        <button onClick={addUser}>addUser</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}