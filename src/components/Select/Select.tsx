import React, {useState, ChangeEvent, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemsType = {
    value: string;
    title: string;
}

export type InputSelectProps = {
    items: ItemsType[];
    value: string;
    onChange: (selectedValue: string) => void;
}

export const Select: React.FC<InputSelectProps> = (props: InputSelectProps) => {
    const [isActive, setIsActive] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState<string>(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const toggleItems = () => setIsActive(!isActive)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        props.onChange(selectedValue);
        setIsActive(true)
    };
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsActive(false)
        }
    }
    return (<>
            <div>
                <select className={s.select + ' ' + (isActive ? s.active : '')} value={selectedItem?.value}
                        onChange={handleChange}>
                    {props.items.map((option) => (
                        <option
                            className={s.items}
                            key={option.value}
                            value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </select>
                <div onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                    {isActive &&
                        <div className={s.items}>
                            {props.items.map(item => <div
                                onMouseEnter={() => {setHoveredElementValue(item.value)}}
                                className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                                key={item.value}
                                onClick={() => {onItemClick(item.value)}
                                }
                            >{item.title}
                            </div>)}
                        </div>
                    }
                </div>
            </div>
        </>
    );
};