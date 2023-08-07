import {Meta, Story, StoryObj} from '@storybook/react';
import { Star } from '../components/Reting/Reting';

const meta: Meta<typeof Star> = {
    // title: 'App/Star',
    component: Star,
    // tags: ['autodocs'],
}
export default meta;

export const DefaultStar: StoryObj<typeof Star> = {
    args: {
        value: 3,
        selected: true
    }
}

export const ZeroStar: StoryObj<typeof Star> = {
    args: {...DefaultStar.args, value:0,selected:false}
}