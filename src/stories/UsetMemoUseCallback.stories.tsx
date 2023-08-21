import React, {useCallback, useMemo, useState} from 'react';
import {ItemsType, Select} from '../components/Select/Select';

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
            // while (fake < 100000000) { //Замедлит віполнеие
            //     fake++;
            //     const fakeValue = Math.random();
            // }
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


export const HelpsToReactMemo = () => {
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
        <button onClick={() => {
            setCounter(counter + 1)
        }}>Add
        </button>
        <button onClick={() => addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
export const LikeUseCallback = () => {
    console.log('HelpsReactMemo')
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['Bible', 'Abetka', 'LordOfTheRing'])

    const addBook = () => {

    }

    const memoizedAddbook2 = useMemo(() => {
        return ()=>{
            setBooks([...books, 'Angular ' + new Date().getTime()])}
    }, [books])

    const memoizedAddbook = useCallback(() => {
        {setBooks([...books, 'Angular ' + new Date().getTime()])}
    }, [books])


    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>Add
        </button>

        {counter}
        <Book addBook={memoizedAddbook}/>
    </>
}

type BooksSecretType = {
    addBook: () => void
}
const BooksSecret = (props: BooksSecretType) => {
    console.log('Books Secret')
    return <>
        <button onClick={props.addBook}>Add book</button>
    </>
}
const Book = React.memo(BooksSecret)

export interface TestType extends ItemsType {
    countryId: number
}

const BelorashaID = 1
const PolandID = 2
export const HalpsSelectMemo = () => {
    debugger
    let [cityName, setCityName] = useState('Minsk');
    let [typeCountry, setTypeCountry] = useState(1)
    const [cities, setCities] = useState<TestType[]>([
        {value: '1', title: 'Minsk', countryId: BelorashaID},
        {value: '2', title: 'Mozir', countryId: BelorashaID},
        {value: '3', title: 'Grodno', countryId: BelorashaID},
        {value: '4', title: 'Warchava', countryId: PolandID},
        {value: '5', title: 'Vrotslav', countryId: PolandID},
        {value: '6', title: 'Krakov', countryId: PolandID},
        {value: '7', title: 'Gdansk', countryId: PolandID}
    ])

    const handleOnChange = (itemName: string) => {
        setCityName(itemName);
    }

    const changeCountry = (idCountry: number) => {
        setTypeCountry(idCountry)
    }
    const citiesFromCountry = useMemo(() => {
        return cities.filter(city =>
            (city.countryId === typeCountry) ? {
                value: city.title,
                title: city.title
            } : false
        )
    }, [typeCountry])

    const citiesWithR = useMemo(() => {
        return cities.filter(u => u.title.toLowerCase().indexOf('r') > -1);
    }, [cities])
    const addCity = () => { //Users пересуеться
        setCities([...cities, {value: '1', title: 'Mirgorod', countryId: PolandID}])
    }
    const addCityWithOutR = () => {
        setCities([...cities, {value: '1', title: 'Stockgolm', countryId: PolandID}])
    }
    return <>
        <button onClick={() => changeCountry(BelorashaID)}>Coutry Belorasha</button>
        <button onClick={() => changeCountry(PolandID)}>Coutry Poland</button>
        <div><span>{citiesFromCountry.length}</span></div>
        <Select value={cityName} items={citiesFromCountry} onChange={handleOnChange}/>

        <button style={{display: 'flex', marginTop: '140px'}} onClick={addCity}>Add City WithR</button>
        <button onClick={addCityWithOutR}>Add City WithOutR</button>
        <div><span>{citiesWithR.length}</span></div>
        <Select value={cityName} items={citiesWithR} onChange={handleOnChange}/>
    </>;
}