import React, { useState } from 'react';
import {TopLayout} from '../Layout';
import { Button,Tag,Select,DatePicker,Input,Icon,Menu, Dropdown } from 'antd';
import {ContentContainer} from '../../components/ContentContainer';
import {ExpandedTable} from './ExpandedTable';
import moment from 'moment';
const { Option } = Select;
const { RangePicker } = DatePicker;
const InputGroup = Input.Group;

export default {
    title: 'Prototyping | Inline Metrics',
    parameters: {
      //component: Filter,
      //componentSubtitle: 'An input widget to let user select a list of options in dropdown to filter data',
    },
  };

 

  const data = [
    {
      key: "camapaign1",
      id:23,
      name: 'One Kings Lane : 2019 Evergreen Budget PP-14066',
      todaySend:2334,
      todayConversion:200,
      dailyGoal:1000,
      sendsToDate:20000,
      targetSends:40000,
      startDate:"Sep 1st, 2019",
      endDate:"Dec 31st, 2019",
      updated:"Oct 23rd, 2019",
      forecastedSends:40000,
      forecastedDelivery:"101%",
      currentDelivery:"50%",
      projectedEndDate:"Dec 29th, 2019",
      totalResponses:1234,
      totalOrderValue:"$223456",
      conversionRate:"12%",
      cpa:"$2.35",
      roas:"$3.12",

      actions:true,
      children: [
        {
          key: 11,
          name: <span style={{marginLeft:48}}>2019-10-22</span>,
          todaySend:233,
          todayConversion:20,
          dailyGoal:100,
          totalOrderValue:"$4356"
          
        },
        {
          key: 12,
          name: <span style={{marginLeft:48}}>2019-10-21</span>,
          todaySend:235,
          todayConversion:15,
          dailyGoal:100,
          totalOrderValue:"$4356"
        
        },
        {
          key: 13,
          name: <span style={{marginLeft:48}}>2019-10-20</span>,
          todaySend:233,
          todayConversion:25,
          dailyGoal:100,
          totalOrderValue:"$4356"
        
          
        },
        {
            key: 14,
            name: <span style={{marginLeft:48}}>2019-10-19</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
        totalOrderValue:"$4356"
            
          },
          {
            key: 15,
            name: <span style={{marginLeft:48}}>2019-10-18</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
            totalOrderValue:"$4356"
            
          },
          {
            key: 16,
            name: <span style={{marginLeft:48}}>2019-10-17</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
        totalOrderValue:"$4356"
            
          },
          {
            key: 17,
            name: <span style={{marginLeft:48}}>2019-10-16</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
        
            totalOrderValue:"$4356"
          },
          {
            key: 18,
            name: <span style={{marginLeft:48}}>2019-10-15</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
        totalOrderValue:"$4356"
            
          },
          {
            key: 19,
            name: <span style={{marginLeft:48}}>2019-10-14</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
        totalOrderValue:"$4356"
            
          },
          {
            key: 20,
            name: <span style={{marginLeft:48}}>2019-10-13</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
        totalOrderValue:"$4356"
            
          },
      ],
    },
    {
    id:24,
      key: "camapaign2",
      name: 'One Kings Lane - Aug 2018 - Feb 2019- PP-13699',
      todaySend:3334,
      todayConversion:300,
      dailyGoal:1500,
      sendsToDate:30000,
      actions:true,
      targetSends:40000,
      startDate:"Sep 1st, 2019",
      endDate:"Dec 31st, 2019",
      updated:"Oct 23rd, 2019",
      forecastedSends:40000,
      forecastedDelivery:"101%",
      currentDelivery:"50%",
      projectedEndDate:"Dec 29th, 2019",
      totalResponses:1234,
      totalOrderValue:"$223456",
      conversionRate:"12%",
      cpa:"$2.35",
      roas:"$3.12",
      children: [
        {
            key: 211,
            name: <span style={{marginLeft:48}}>2019-10-22</span>,
            todaySend:233,
            todayConversion:20,
            dailyGoal:100,
            totalOrderValue:"$4356"
          },
          {
            key: 212,
            name: <span style={{marginLeft:48}}>2019-10-21</span>,
            todaySend:235,
            todayConversion:15,
            dailyGoal:100,
          totalOrderValue:"$4356"
          },
          {
            key: 213,
            name: <span style={{marginLeft:48}}>2019-10-20</span>,
            todaySend:233,
            todayConversion:25,
            dailyGoal:100,
          totalOrderValue:"$4356"
            
          },
          {
              key: 214,
              name: <span style={{marginLeft:48}}>2019-10-19</span>,
              todaySend:233,
              todayConversion:25,
              dailyGoal:100,
          totalOrderValue:"$4356"
              
            },
            {
              key: 215,
              name: <span style={{marginLeft:48}}>2019-10-18</span>,
              todaySend:233,
              todayConversion:25,
              dailyGoal:100,
          totalOrderValue:"$4356"
              
            },
            {
              key: 216,
              name: <span style={{marginLeft:48}}>2019-10-17</span>,
              todaySend:233,
              todayConversion:25,
              dailyGoal:100,
          totalOrderValue:"$4356"
              
            },
            {
              key: 217,
              name: <span style={{marginLeft:48}}>2019-10-16</span>,
              todaySend:233,
              todayConversion:25,
              dailyGoal:100,
          
             totalOrderValue:"$4356" 
            },
            {
              key: 218,
              name: <span style={{marginLeft:48}}>2019-10-15</span>,
              todaySend:233,
              todayConversion:25,
              dailyGoal:100,
          totalOrderValue:"$4356"
              
            },
            {
              key: 219,
              name: <span style={{marginLeft:48}}>2019-10-14</span>,
              todaySend:233,
              todayConversion:25,
              dailyGoal:100,
          totalOrderValue:"$4356"
              
            },
            {
              key: 220,
              name: <span style={{marginLeft:48}}>2019-10-13</span>,
              todaySend:233,
              todayConversion:25,
              dailyGoal:100,
          totalOrderValue:"$4356"
              
            },
      ],
    },
  ];

  const getDailys =(day)=>{
    var _day = day>=30?30:day;
    var dailyData = [];
    for(var i = 0;i<=_day;i++){
      dailyData.push({
          key: "day"+i+Math.random(),
          name: <span>2019-10-{31-i}</span>,
          todaySend:233,
          todayConversion:20,
          dailyGoal:100,
          totalOrderValue:"$4356",
          endDate:"-",
          startDate:"-"
      });
    }
    return dailyData;
  };

  //const dailys = getDailys(14);

  const flight = (name)=>{
    return {
         key:"flight"+Math.random(),
         id:Math.round(Math.random()*1000),
           name: <span><Tag color="cyan">Fight</Tag>{name}</span>,
           todaySend:1000+Math.round(Math.random()*1000),
           todayConversion:200,
           dailyGoal:1000,
           sendsToDate:20000,
           targetSends:40000,
           startDate:"Sep 1st, 2019",
           endDate:"Dec 31st, 2019",
           updated:"Oct 23rd, 2019",
           forecastedSends:40000,
           forecastedDelivery:"101%",
           currentDelivery:"50%",
           projectedEndDate:"Dec 29th, 2019",
           totalResponses:1234,
           totalOrderValue:"$223456",
           conversionRate:"12%",
           cpa:"$2.35",
           roas:"$3.12",  
           actions:true,
           children:[
               {
                key:"strategy1"+Math.random(),
                name:<div style={{display:"flex"}}><div style={{marginRight:24}}><Tag color="green" style={{display:'inline'}}>Strategy</Tag>OneKingLane_Prospects_InteriorDesign_AllGeos</div>
                <div><Tag color="gold" style={{display:'inline'}}>Creative</Tag>OKL_InteriorDesign_OKL20STYLISH_4pgCatalog_10.3upload_11.15exp</div></div>,
                //id:Math.round(Math.random()*1000),
                dailyGoal:500,
                todaySend:500+Math.round(Math.random()*500),
                todayConversion:Math.round(Math.random()*1000),
                totalOrderValue:"$"+Math.round(Math.random()*1000),
                actions:true,
                children:getDailys(14)
               },
               {
                key:"strategy2"+Math.random(),
                name:<div style={{display:"flex"}}><div style={{marginRight:24}}><Tag color="green" style={{display:'inline'}}>Strategy</Tag>OneKingLane_Customers_InteriorDesign_AllGeos</div>
                   <div><Tag color="gold" style={{display:'inline'}}>Creative</Tag>OKL_InteriorDesign_OKL20STYLISH_4pgCatalog_10.3upload_11.15exp</div></div>,
                //id:Math.round(Math.random()*1000),
                dailyGoal:500,
                todaySend:500+Math.round(Math.random()*500),
                todayConversion:Math.round(Math.random()*1000),
                totalOrderValue:"$"+Math.round(Math.random()*1000),
                actions:true,
                children:getDailys(14)
               }
           ]
     };};

  const getFlights = ()=> [
    flight('OKL_Existing Customers_ChurnLapsed_OCt'),
    flight('OKL_AllVisitors_Interior Design_Catalog_Oct_$1.7cpp'),
    flight('OKL_Prospects_ABtest_Oc'),
    flight('OOKL_Customers_ABTest_Oct'),
    flight('OKL_Prospects_OldBlueImage_Sept'),
  ]

//const flights = getFlights();
//console.log(flights);
  
  

  const data2 =()=> [
    {
      key: "campaign1",
      id:Math.round(Math.random()*1000),
      name: <span><Tag color="blue">Campaign</Tag>One Kings Lane : 2019 Evergreen Budget PP-14066</span>,
      todaySend:6334,
      todayConversion:200,
      dailyGoal:1000,
      sendsToDate:20000,
      targetSends:40000,
      startDate:"Sep 1st, 2019",
      endDate:"Dec 31st, 2019",
      updated:"Oct 23rd, 2019",
      forecastedSends:40000,
      forecastedDelivery:"101%",
      currentDelivery:"50%",
      projectedEndDate:"Dec 29th, 2019",
      totalResponses:1234,
      totalOrderValue:"$223456",
      conversionRate:"12%",
      cpa:"$2.35",
      roas:"$3.12",  
      actions:true,
      children:getFlights()
  
    },
    {
    id:Math.round(Math.random()*1000),
      key: "campaign2",
      name: <span><Tag color="blue">Campaign</Tag>One Kings Lane - Aug 2018 - Feb 2019- PP-13699</span>,
      todaySend:5134,
      todayConversion:300,
      dailyGoal:1500,
      sendsToDate:30000,
      actions:true,
      targetSends:40000,
      startDate:"Sep 1st, 2019",
      endDate:"Dec 31st, 2019",
      updated:"Oct 23rd, 2019",
      forecastedSends:40000,
      forecastedDelivery:"101%",
      currentDelivery:"50%",
      projectedEndDate:"Dec 29th, 2019",
      totalResponses:1234,
      totalOrderValue:"$223456",
      conversionRate:"12%",
      cpa:"$2.35",
      roas:"$3.12",
      children:getFlights()
    },
  ];

  //console.log(data2());

export const campaignInlineMetrics = () =>
   
<TopLayout childrenType="table" children={<div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Campaign Manager" 
actions={[<Button type="primary" icon="plus">Create New Campaign</Button>]}
 childrenType="table"
style={{padding:"1px 0 0 0"}}
children={
<ExpandedTable scroll={{ x: 2020 }} dataSource={data}
expandIconAsCell={true} expandIconColumnIndex={1}
/>
}/></div>}/>;


export const CampaignInlineMetricsWithAllHierarchy = (props) =>{
    const [breakdownBy, setBreakdownBy] = useState("campaign");  

return <TopLayout childrenType="table" children={<div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Campaign Manager" 
actions={[
<InputGroup compact>
    <Select defaultValue="Event day">
      <Option value="Event day">Event day</Option>
      <Option value="Send day">Send day</Option>
    </Select>
    <RangePicker 
    style={{width:230}}
    ranges={{
        'Past 14 days': [moment().subtract(14, 'days'), moment()],
        'Past 30 days': [moment().subtract(30, 'days'), moment()],
        'Month to date': [moment().startOf('month'), moment().endOf('month')],
      }}/>
</InputGroup>,
<Select value={{key:breakdownBy}} labelInValue={true} onChange={(value)=>setBreakdownBy(value.key)} style={{width:190}}>
    <Option value="campaign"><span style={{color:"rgba(0,0,0,0.65)"}}>Breakdown: <span style={{color:'black'}}>Campaign</span></span></Option>
    <Option value="flight"><span style={{color:"rgba(0,0,0,0.65)"}}>Breakdown: <span style={{color:'black'}}>Flight</span></span></Option>
    <Option value="flightset"><span style={{color:"rgba(0,0,0,0.65)"}}>Breakdown: <span style={{color:'black'}}>Flight set</span></span></Option>
</Select>,
<Button icon='download'>Export</Button>,
<Button type="primary" icon="plus">Create New Campaign</Button>

]}
 childrenType="table"
style={{padding:"1px 0 0 0"}}
children={
<ExpandedTable  dataSource={data2()}
expandIconAsCell={true} 
expandIconColumnIndex={1} 
getDailys = {getDailys}
breakdownBy = {breakdownBy}
/>
}/></div>}/>;
}

export const MinorImprovement = (props) =>{
    const [breakdownBy, setBreakdownBy] = useState("campaign");  
  
    const menu = (
        <Menu >
          <Menu.Item key="1">Export All</Menu.Item>
          <Menu.Item key="2">Export current view</Menu.Item>
        </Menu>
      );

return <TopLayout childrenType="table" children={<div style={{margin:"24px 0 24px 0"}}><ContentContainer title="Campaign Manager" 
actions={[
    <InputGroup compact>
    <Select defaultValue="Event day">
      <Option value="Event day">Event day</Option>
      <Option value="Send day">Send day</Option>
    </Select>
    <RangePicker 
    defaultValue={[moment().subtract(14, 'days'), moment()]}
    style={{width:230}}
    ranges={{
        'Past 14 days': [moment().subtract(14, 'days'), moment()],
        'Past 30 days': [moment().subtract(30, 'days'), moment()],
        'Month to date': [moment().startOf('month'), moment().endOf('month')],
      }}/>
</InputGroup>,
<Select value={{key:breakdownBy}} labelInValue={true} onChange={(value)=>setBreakdownBy(value.key)} style={{width:190}}>
    <Option value="campaign"><span style={{color:"rgba(0,0,0,0.65)"}}>Breakdown: <span style={{color:'black'}}>Campaign</span></span></Option>
    <Option value="flight"><span style={{color:"rgba(0,0,0,0.65)"}}>Breakdown: <span style={{color:'black'}}>Flight</span></span></Option>
    <Option value="flightset"><span style={{color:"rgba(0,0,0,0.65)"}}>Breakdown: <span style={{color:'black'}}>Flight set</span></span></Option>
</Select>,
<Dropdown overlay={menu}>
      <Button>
        Export <Icon type="down" />
      </Button>
    </Dropdown>,
<Button type="primary" icon="plus">Create New Campaign</Button>
]}
 childrenType="table"
style={{padding:"1px 0 0 0"}}
children={
<ExpandedTable  
dataSource={data2()}
expandIconAsCell={true} 
expandIconColumnIndex={1} 
getDailys = {getDailys}
breakdownBy = {breakdownBy}
scrollY="calc(100vh - 304px)"
expandIcon={(props)=>{
    if(breakdownBy==="campaign"){
        return props.expanded&&props.expandable?<Button size="small" icon="calendar" type="link" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transitionDuration:"0.1s",color:"#1b2ccc"}}/>:<Button size="small" icon="calendar" type="link" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transitionDuration:"0.1s",display:props.expandable?"block":"none",color:"rgba(0,0,0,0.45)"}}/>
    }
    if(breakdownBy==="flight"){
        if(props.record.key.indexOf("campaign")>=0){
           return props.expanded&&props.expandable?<Button size="small" type="link" icon="right" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transform:"rotate(90deg)",transitionDuration:"0.1s"}}/>
:<Button size="small" onClick={e=>props.onExpand(props.record, e)} icon="right" type="link" style={{marginRight:4,transitionDuration:"0.1s",display:props.expandable?"block":"none"}}/>
        }
        else{
            return props.expanded&&props.expandable?<Button size="small" icon="calendar" type="link" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transitionDuration:"0.1s",color:"#1b2ccc"}}/>:<Button size="small" icon="calendar" type="link" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transitionDuration:"0.1s",display:props.expandable?"block":"none",color:"rgba(0,0,0,0.45)"}}/>
            //<div className="ant-table-row-expand-icon ant-table-row-expanded" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:8,transitionDuration:"0.1s"}}/>:<div className="ant-table-row-expand-icon ant-table-row-collapsed" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:8,transitionDuration:"0.1s",display:props.expandable?"block":"none"}}/>
    
        }
    }
    if(breakdownBy==="flightset"){
        if(props.record.key.indexOf("campaign")>=0||props.record.key.indexOf("flight")>=0){
            return props.expanded&&props.expandable?<Button size="small" type="link" icon="right" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transform:"rotate(90deg)",transitionDuration:"0.1s"}}/>
 :<Button size="small" onClick={e=>props.onExpand(props.record, e)} icon="right" type="link" style={{marginRight:4,transitionDuration:"0.1s",display:props.expandable?"block":"none"}}/>
         }
         else{
            return props.expanded&&props.expandable?<Button size="small" icon="calendar" type="link" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transitionDuration:"0.1s",color:"#1b2ccc"}}/>:<Button size="small" icon="calendar" type="link" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:4,transitionDuration:"0.1s",display:props.expandable?"block":"none",color:"rgba(0,0,0,0.45)"}}/>
            //<div className="ant-table-row-expand-icon ant-table-row-expanded" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:8,transitionDuration:"0.1s"}}/>:<div className="ant-table-row-expand-icon ant-table-row-collapsed" onClick={e=>props.onExpand(props.record, e)} style={{marginRight:8,transitionDuration:"0.1s",display:props.expandable?"block":"none"}}/>
    
        }
    }
    

}}
/>
}/></div>}/>;}
