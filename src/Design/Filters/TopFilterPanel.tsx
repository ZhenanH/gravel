import React from 'react';
import { Button,Radio,Collapse,Select, Tag } from 'antd';
import {filters} from './filterOptions'
//import {Select, Option} from '../../components/Select';
const { Panel } = Collapse;
const { Option } = Select;
interface Props {
    style:Object;
}

interface State {
    activeKey:string;
    activeFilters:Array<string>;
    appliedFilters:Array<number>;
}

interface filterOptions {
    [key:string]:Object;
}




const createFilter = (host:TopFilterPanel)=><div>

    <Select onChange={()=>host.setState({})}    
            placeholder="Select filter"
            style={{ width: 250,marginBottom:12 }}
            //value={host.state.filterOptions}
          >
      {
         Object.keys(filters).map(k=><Option value={k}>{k}</Option>) 
      }   
</Select>
<span style={{margin:"0px 12px 0 12px"}}>includes</span>
<Select     
            placeholder="Select filter"
            style={{marginBottom:12,minWidth:250,maxWidth:"calc(100% - 370px)" }}
            mode="multiple"
          >
         
    <Option value="1800Flowers Loyalty Program">1800Flowers Loyalty Program</Option>
    <Option value="Oklahoma Discount Garage Door">Oklahoma Discount Garage Door</Option>
    <Option value="The Metropolitan Museum of Art">The Metropolitan Museum of Art</Option>
    <Option value="Very long long long long long long brand name">Very long long long long long long brand name</Option>
    <Option value="Very long long long brand name">Very long long long brand name</Option>
    <Option value="Very long long long brand name2">Very long long long brand name2</Option>
    <Option value="Very long long long brand name3">Very long long long brand name3</Option>
    <Option value="Very long long long brand name4">Very long long long brand name4</Option>
    <Option value="Very long long long brand name5">Very long long long brand name5</Option>
</Select>
<Button onClick={()=>{
    var filters = host.state.activeFilters;
    filters.pop();
    host.setState({activeFilters:filters})}
    } type="dashed" shape="circle" icon="minus" size="small" style={{marginLeft:12}}/>
</div>

export class TopFilterPanel extends React.Component<Props, State>  {
    state = {
        activeKey:"0",
        activeFilters:[] as string[],
        appliedFilters:[] as number[],
   
    }
    render() {
       //console.log('filter',filters);
        return (<div style={this.props.style}>
           <div style={{display:"flex",alignItems:"center"}}>
           <Button onClick={()=>this.setState({activeKey:"0",appliedFilters:Object.assign([], this.state.activeFilters)})} type="primary" disabled={JSON.stringify(this.state.activeFilters)===JSON.stringify(this.state.appliedFilters)?true:false} style={{marginRight:12}}>Apply Filters</Button> 
           <div>
               {this.state.appliedFilters.map(t=><Tag>{Math.round(Math.random()*10)+1} {Math.random()<=0.5?"brands":(Math.random()<=0.5?"flight status":"owner")} </Tag>)}
           </div>
           <Button type="link" icon={this.state.activeKey==="0"?"down":"up"} onClick={()=>this.setState({activeKey:this.state.activeKey==="0"?"1":"0"})}>{ this.state.activeKey!=="0"?"Hide detail":(this.state.activeFilters.length===0?"Add Filters":"Show detail")}</Button>
           <div style={{flex:1}}></div>
           <div style={{minWidth:180}}>
            <span style={{marginRight:8}}>Unit:</span>
            <Radio.Group defaultValue={"PDM"}>
            <Radio.Button value="PDM">PDM</Radio.Button>
            <Radio.Button value="Dollars">Dollar</Radio.Button>
            </Radio.Group>
           </div>
           <div style={{minWidth:320}}>
           <span style={{marginRight:8,marginLeft:24}}>Forecast type:</span>
            <Radio.Group defaultValue={"Capped"}>
            <Radio.Button value="Capped">Capped</Radio.Button>
            <Radio.Button value="Uncapped">Uncapped</Radio.Button>
            </Radio.Group>
           </div>
           </div>
           <div>
               <style>
                   {
                   `
                   .ant-collapse-header {
                      display:none;
                      border:0px;
                   }

                   .ant-collapse{
                    border:0px;
                   }
                   .ant-collapse > .ant-collapse-item {
                      border:0px;
                   }

                   .ant-collapse-content {
                       border:0px;
                   }

                   .ant-collapse-content-active {
                    border:1px solid rgba(0,0,0,0.1);
                }

                   .ant-collapse-item {
                       border:0px;
                   }

                   `
                   }
               </style>
           <Collapse activeKey={[this.state.activeKey]} style={{marginTop:12}}>
           <Panel header="This is panel header 1" key="1">
           {
               this.state.activeFilters.map((f,index)=>createFilter(this))
            }
               
           
           <Button onClick={()=>{
                         
                this.setState({activeFilters:this.state.activeFilters.concat(["new"])});
               
               }} icon="plus" style={{marginRight:12}} type="dashed"></Button><span style={{display:this.state.activeFilters.length!==0?"none":"inline-block"}}>No filters applied</span>
           </Panel> 
           </Collapse>
           </div>
           </div>
           );
    }
}