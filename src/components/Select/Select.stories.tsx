import {Meta, StoryObj} from '@storybook/react';
import {Select} from '../../components/Select/Select';
import {useState} from 'react';

const meta: Meta<typeof Select> = {
    // title: 'App/Star',
    component: Select,
    // tags: ['autodocs'],
}
export default meta;

type Story = StoryObj<typeof Select>;
const items = [
    {value: '1', title: 'Dnipro'},
    {value: '2', title: 'Zp'},
    {value: '3', title: 'Lviv'}]
const SelectWithValue = () => {
    const [value, setValue] = useState('1');
    const handleOnChange = (itemName: string) => {
        setValue(itemName);
    }
    return <Select value={value} items={items} onChange={handleOnChange}/>;
};
const SelectWithoutValue = () => {
    const [value, setValue] = useState<string>('1');
    const handleOnChange = (itemName: string) => {
        setValue(itemName);
    }
    return <Select value={value} items={items} onChange={handleOnChange}/>;
};

export const SelectWithValuee: Story = {
    render: () => <SelectWithValue/>,
};
export const SelectWithoutValuee: Story = {
    render: () => <SelectWithoutValue/>,
};