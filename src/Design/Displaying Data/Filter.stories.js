import React from 'react';
import {TopLayout} from '../Layout';
import { Card,Tooltip } from 'antd';
import {Select, Option} from '../../components/Select';

export default {
    title: 'Design | Guideline / Displaying Data',
    parameters: {
      //component: Filter,
      componentSubtitle: 'An input widget to let user select a list of options in dropdown to filter data',
    },
  };






export const filtersInRightPanel = () => <div>
<TopLayout childrenType="report" 
children={<div><Card style={{marginTop:24,height:"140vh"}}>Reporting</Card></div>}
filterPanel={(toggle)=>{return <Card style={{height:"100%",position:"relative",overflowY:"scroll"}}><div onClick={toggle}
style={{
    position: "absolute",
    top: "50%",
    fontSize:11,
    left: -38,
    width: 60,
    height: 16,
    background: "#1b2ccc",
    transform: "rotate(-90deg)",
    borderRadius: "5px 5px 0 0",
    color:"white",
    display:"flex",
    justifyContent:"center",
    cursor:"pointer"
  }}>filter</div>
  
  <style>
              {
                  `
                  .ant-select-selection__choice__content {
                    white-space:normal !important;
                  }
                  
                  .ant-select-selection--multiple .ant-select-selection__rendered > ul > li {
                      height:auto;
                  }

                  p  {
                      margin-top:1em;
                  }
                  `
              }
          </style>
          <p>Brand</p>
  <Select 
  maxTagCount={0}
  maxTagPlaceholder={(value)=>{return <Tooltip title={<ul>{value.map(v=><li>{v}</li>)}</ul>}>{value.length} brands selected</Tooltip>}}
            mode="multiple"
            placeholder="Select brands"
            style={{ width: "100%" }}
            dropdownMatchSelectWidth = {false}
            dropdownPlacement="right"
          >
         
    <Option value="1800Flowers Loyalty Program">1800Flowers Loyalty Program</Option>
    <Option value="Oklahoma Discount Garage Door">Oklahoma Discount Garage Door</Option>
    <Option value="The Metropolitan Museum of Art">The Metropolitan Museum of Art</Option>
    <Option value="Very long long long long long long brand name">Very long long long long long long brand name</Option>
    <Option value="Very long long long brand name">Very long long long brand name</Option>
</Select>

<p>Brand</p>

  <Select 
            mode="multiple"
            placeholder="Select brands"
            style={{ width: "100%" }}
            dropdownMatchSelectWidth = {false}
            dropdownPlacement="right"
          >
         
    <Option value="a">1800Flowers Loyalty Program</Option>
    <Option value="b">Oklahoma Discount Garage Door</Option>
    <Option value="c">The Metropolitan Museum of Art</Option>
    <Option value="d">Very long long long long long long brand name</Option>
    <Option value="e">Very long long long brand name</Option>
</Select>

<p>Brand</p>

  <Select 
            mode="multiple"
            placeholder="Select brands"
            style={{ width: "100%" }}
            dropdownMatchSelectWidth = {false}
            dropdownPlacement="right"
          >
         
    <Option value="a">1800Flowers Loyalty Program</Option>
    <Option value="b">Oklahoma Discount Garage Door</Option>
    <Option value="c">The Metropolitan Museum of Art</Option>
    <Option value="d">Very long long long long long long brand name</Option>
    <Option value="e">Very long long long brand name</Option>
</Select>

<p>Brand</p>

  <Select 
            mode="multiple"
            placeholder="Select brands"
            style={{ width: "100%" }}
            dropdownMatchSelectWidth = {false}
            dropdownPlacement="right"
          >
         
    <Option value="a">1800Flowers Loyalty Program</Option>
    <Option value="b">Oklahoma Discount Garage Door</Option>
    <Option value="c">The Metropolitan Museum of Art</Option>
    <Option value="d">Very long long long long long long brand name</Option>
    <Option value="e">Very long long long brand name</Option>
</Select>
  </Card>}}
/>
</div>;