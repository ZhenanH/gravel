import React from 'react';
import { action } from '@storybook/addon-actions';
import {ContentContainer} from './ContentContainer';
import {Button} from 'antd';
import '../../App.css';


export default {
  title: 'Components | Container',
  parameters: {
    component: ContentContainer,
    componentSubtitle: 'A container to host table, forms or other UI elements.',
  },
};


export const containerWithButton = () => <div className="demo">
  <ContentContainer title="Campaign Manager" actions={[<Button type="primary" icon="plus">Create New Campaign</Button>]}/>
  </div>;


export const containerWithSubtitle = () => <div className="demo">
  <ContentContainer info="A file derived from existing customer records, 
and/or additional customer segments, that your 
targeted prospects will 'Look-alike'." 
title="Look-alike Seed" 
subtitle="Select customer attributes below to determine which existing customer records will be used to build a model of look-alike prospects"/>
  </div>;