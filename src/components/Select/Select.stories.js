import React from 'react';
import { action } from '@storybook/addon-actions';
import {Select, Option} from './Select';
import { withDesign } from 'storybook-addon-designs'



export default {
  title: 'Components | Select',
  parameters: {
    component: Select,
    componentSubtitle: 'An input widget to let user select a list of options in dropdown.',
  },
};

export const basic = () => <Select 
            defaultValue="Option A" 
            style={{ width: 120 }}
            dropdownMatchSelectWidth = {false}>
    <Option value="a">Option A</Option>
    <Option value="b">Option B</Option>
</Select>;


export const wideContent = () => <Select 
            defaultValue="Option A" 
            style={{ width: 120 }}
            dropdownMatchSelectWidth = {false}
            >
    <Option value="a">Option A</Option>
    <Option value="b">Very long long long option name</Option>
</Select>;

export const dropdownAlignRight = () => <Select 
            defaultValue="Option A" 
            style={{ width: 120,marginLeft:100 }}
            dropdownMatchSelectWidth = {false}
            dropdownPlacement="right"
          >
    <Option value="a">Brand A</Option>
    <Option value="b">Very long long long option name</Option>
</Select>;

