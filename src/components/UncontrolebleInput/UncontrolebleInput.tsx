import {useRef, useState} from 'react';


export const UncontrolebleInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (<>
            <input ref={inputRef}/>
            <button onClick={save}>- actual value: {value}</button>
        </>
    )
}