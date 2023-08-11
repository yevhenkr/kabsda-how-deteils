import {Meta, StoryObj} from '@storybook/react';
import UncontroldAcсordion from './UncontroldAcсordion';

const meta: Meta<typeof UncontroldAcсordion> = {
    component: UncontroldAcсordion,
}
export default meta;

type Story = StoryObj<typeof UncontroldAcсordion>;
const items = [
    {value: '1', title: 'Dnipro'},
    {value: '2', title: 'Zp'},
    {value: '3', title: 'Lviv'}]
const SelectWithValue = () => {
    return <UncontroldAcсordion titleValue={'User'}/>;
};

export const SelectWithValuee: Story = {
    render: () => <SelectWithValue/>,
};