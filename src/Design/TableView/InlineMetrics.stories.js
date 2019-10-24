import React from 'react';
import {TopLayout} from '../Layout';
import { Button } from 'antd';
import {ContentContainer} from '../../components/ContentContainer';
import {ExpandedTable} from './ExpandedTable';
export default {
    title: 'Prototyping | Inline Metrics',
    parameters: {
      //component: Filter,
      //componentSubtitle: 'An input widget to let user select a list of options in dropdown to filter data',
    },
  };

 



  


export const campaignInlineMetrics = () =>
   
<TopLayout childrenType="table" children={<div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Campaign Manager" 
actions={[<Button type="primary" icon="plus">Create New Campaign</Button>]}
 childrenType="table"
style={{padding:"1px 0 0 0"}}
children={
<ExpandedTable scroll={{ x: 2020 }}
expandIconAsCell={false} expandIconColumnIndex={-1} 
/>
}/></div>}/>;