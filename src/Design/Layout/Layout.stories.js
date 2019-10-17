import React from 'react';
import { action } from '@storybook/addon-actions';
import {ContentContainer} from '../../components/ContentContainer';
import { Card, Button } from 'antd';
import {TopLayout} from './Layout';
import '../../App.css';


export default {
  title: 'Design | Guideline / Layout',
  parameters: {
    component: TopLayout,
    componentSubtitle: 'The scaffolding of the app.',
  },
};


export const campaignLayoutWithTable = () => <div>
  <TopLayout childrenType="table" children={<div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Container Title" action="Action" childrenType="table"/></div>}/>
  </div>;

export const campaignLayoutWithForm = () => <div>
<TopLayout childrenType="form" children={<div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Container Title"  childrenType="form" style={{height:500}}/></div>}/>
</div>;

export const campaignLayoutWithFormAndFooterBar = () => <div>
<TopLayout childrenType="form"
children={[
          <div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Container Title" childrenType="form" style={{height:500}}/></div>,
          <div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Container Title" childrenType="form" style={{height:500}}/></div>
        ]} 
footerBar={
<Card 
extra = {[<Button style={{margin:"0 12px"}}>Cancel</Button>,<Button type="primary" style={{margin:"0 12px"}}>Action</Button>]}
bodyStyle ={{padding:0}}
></Card>}/>
</div>;
