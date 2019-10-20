import React from 'react';
import { action } from '@storybook/addon-actions';
import {Select, Option} from './Select';
import { withDesign } from 'storybook-addon-designs';



export default {
  title: 'Components | Select',
  parameters: {
    component: Select,
    componentSubtitle: 'An input widget to let user select a list of options in dropdown.',
  },
};

export const basic = () => <div class="demo"><Select 
            defaultValue="Option A" 
            style={{ width: 120 }}
            dropdownMatchSelectWidth = {false}>
    <Option value="a">Option A</Option>
    <Option value="b">Option B</Option>
</Select></div>;


export const wideContent = () => <div class="demo"><Select 
            defaultValue="Option A" 
            style={{ width: 120 }}
            dropdownMatchSelectWidth = {false}
            >
    <Option value="a">Option A</Option>
    <Option value="b">Very long long long option name</Option>
</Select></div>;

export const dropdownAlignRight = () =><div class="demo"> <Select 
            defaultValue="Option A" 
            style={{ width: 120,position:"relative",left:100 }}
            dropdownMatchSelectWidth = {false}
            dropdownPlacement="right"
          >
    <Option value="a">Brand A</Option>
    <Option value="b">Very long long long option name</Option>
</Select></div>;

