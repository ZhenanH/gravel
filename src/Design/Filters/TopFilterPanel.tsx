import React from 'react';
import { Button,Radio,Collapse,Select, Tag } from 'antd';
//import {Select, Option} from '../../components/Select';
const { Panel } = Collapse;
const { Option } = Select;
interface Props {
    style:Object;
}

interface State {
    activeKey:string;
    activeFilters:Array<number>;
}

const createFilter = (active:boolean)=><div style={{display:active?"block":"none"}}>
    <Select     
            placeholder="Select filter"
            style={{ width: 250,marginBottom:12 }}

          >
         
    <Option value="Brand">Brand</Option>
    <Option value="Flight status">Flight status</Option>
    <Option value="Owner">Owner</Option>
    <Option value="OM">OM</Option>
    <Option value="TAM">TAM</Option>
    <Option value="BI Manager">BI Manager</Option>
    <Option value="Flight end date">Flight end date</Option>
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
<Button type="dashed" shape="circle" icon="minus" size="small" style={{marginLeft:12}}/>
</div>

export class TopFilterPanel extends React.Component<Props, State>  {
    state = {
        activeKey:"0",
        activeFilters:[] as number[],
    }
    render() {
        return (<div style={this.props.style}>
           <div style={{display:"flex",alignItems:"center"}}>
           <Button onClick={()=>this.setState({activeKey:"0"})} type="primary" disabled={this.state.activeFilters.length>0?false:true} style={{marginRight:12}}>Apply Filters</Button> 
           <div>
               {this.state.activeFilters.map(t=><Tag>{Math.round(Math.random()*10)+1} {Math.random()<=0.5?"brands":(Math.random()<=0.5?"flight status":"owner")} </Tag>)}
           </div>
           <Button type="link" onClick={()=>this.setState({activeKey:this.state.activeKey==="0"?"1":"0"})}>{this.state.activeKey==="0"?"Show detail":"Hide detail"}</Button>
           <div style={{flex:1}}></div>
           <div>
            <span style={{marginRight:8}}>Unit:</span>
            <Radio.Group defaultValue={"PDM"}>
            <Radio.Button value="PDM">PDM</Radio.Button>
            <Radio.Button value="Dollars">Dollar</Radio.Button>
            </Radio.Group>
           </div>
           <div>
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
               this.state.activeFilters.map((f,index)=>createFilter(true))
            }
               
           
           <Button onClick={()=>{
               if(this.state.activeFilters.length===0){
                this.setState({activeFilters:[1]});
               }else{
                   var newArray = [this.state.activeFilters.length+1];
                this.setState({activeFilters:this.state.activeFilters.concat(newArray)});
               }
               }} icon="plus" style={{marginRight:12}} type="dashed"></Button><span style={{display:this.state.activeFilters.length!==0?"none":"inline-block"}}>No filters applied</span>
           </Panel> 
           </Collapse>
           </div>
           </div>
           );
    }
}