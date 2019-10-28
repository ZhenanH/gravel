import React from 'react';
import {Table,Button,Icon} from 'antd';
import { ColumnProps } from 'antd/es/table';



  interface Props {
    dataSource:any;
    getDailys:any;
    breakdownBy:string;
    scrollY:any;
  }
  
  interface State {
    expandedRowKeys:Array<string>;
    nameColumnWidth:number;
    breakDownData:any;
  }


export class  ExpandedTable extends React.Component<Props, State> {
 
    state = {
       expandedRowKeys:[],
       nameColumnWidth:300,
       breakDownData:this.props.dataSource
      };
  
  
      toggleDaily = (index:string)=>{     
        if(index === this.state.expandedRowKeys[0]){
            this.setState({expandedRowKeys:[]});
        }else{
        this.setState({expandedRowKeys:[index]}); 
       } 
    }

      updateBreakDownData = (value:any,record:any)=>{
          console.log(record);
          if(record.key.indexOf('flight')>=0){
            console.log("flight");
            this.setState({breakDownData:this.props.dataSource.map((c:any)=>{c.children.map((f:any)=>{f.children=this.props.getDailys(14);});  return c;})});
          }
          if(record.key.indexOf('strategy')>=0){
            console.log("strategy");
            this.setState({breakDownData:this.props.dataSource});
          }
          if(record.key.indexOf('campaign')>=0){
            //console.log("campaign",this.props.getDailys(14));
            this.setState({breakDownData:this.props.dataSource.map((c:any)=>{c.children=this.props.getDailys(14);return c;})});
          }
          //console.log(this.state.breakDownData);
      }



   
    
      
        
        render(){
            
            var columns:ColumnProps<any>[] = [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                    fixed: 'left',
                    width:100
                  },
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                  fixed: 'left',
                  width:this.state.nameColumnWidth,
                  className:"nameColumn",
                  render:(value:string,record:object,index:number)=><span>{value}</span>
                  
                },
                
                {
                  title: "Today's Send",
                  dataIndex: 'todaySend',
                  key: 'todaySend',
                  width:80,
                  align:"right"
                },
                {
                    title: "Today's Conversion",
                    dataIndex: 'todayConversion',
                    key: 'todayConversion',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'Daily Goal',
                    dataIndex: 'dailyGoal',
                    key: 'dailyGoal',
                    width:80,
                    align:"right"
                  },
                {
                  title: 'Sends to Date',
                  dataIndex: 'sendsToDate',
                  key: 'sendsToDate',
                  width:80,
                  align:"right"
                },
                {
                    title: 'Target Sends',
                    dataIndex: 'targetSends',
                    key: 'targetSends',
                    width:80,
                    align:"right"
                  },
                  {
                    title: 'Start Date',
                    dataIndex: 'startDate',
                    key: 'startDate',
                    width:150,
                    align:"right"
                  },
                  {
                    title: 'End Date',
                    dataIndex: 'endDate',
                    key: 'endDate',
                    width:150,
                    align:"right"
                  },
                  {
                    title: 'Updated',
                    dataIndex: 'updated',
                    key: 'updated',
                    width:150,
                    align:"right"
                  },
                  {
                    title: 'Forecasted Sends',
                    dataIndex: 'forecastedSends',
                    key: 'forecastedSends',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'Forecasted Delivery %',
                    dataIndex: 'forecastedDelivery',
                    key: 'forecastedDelivery',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'Current Delivery %',
                    dataIndex: 'currentDelivery',
                    key: 'currentDelivery',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'Projected End Date',
                    dataIndex: 'projectedEndDate',
                    key: 'projectedEndDate',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'Total Responses',
                    dataIndex: 'totalResponses',
                    key: 'totalResponses',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'Total Order Value',
                    dataIndex: 'totalOrderValue',
                    key: 'totalOrderValue',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'Conversion Rate',
                    dataIndex: 'conversionRate',
                    key: 'conversionRate',
                    width:120,
                    align:"right"
                  },
                  {
                    title: 'CPA',
                    dataIndex: 'cpa',
                    key: 'cpa',
                    width:80,
                    align:"right"
                  },
                  {
                    title: 'ROAS',
                    dataIndex: 'roas',
                    key: 'roas',
                    width:80,
                    align:"right"
                  },
                  {
                    title: '',
                    dataIndex: 'actions',
                    key: 'actions',
                    width:10,
                    fixed:"right",
                    render: (value,record,index) => value?[<Button type="link" icon="delete"></Button>]:null
                  }
            
             
              ];

            

        return <div>
                 <style>
              {
                  `
                  .ant-table-column-title {
                    word-break:keep-all;
                  }

                  .ant-table-thead > tr > th {
                    background-color:#fff !important;
                  }

                  .ant-table-thead > tr > th, .ant-table-tbody > tr > td{
                    padding:8px 12px;
                  }

                  .ant-btn-link{
                    color: rgba(0,0,0,0.65);
                  }

                  .ant-table-pagination.ant-pagination {
                      margin: 16px 16px 0 0;
                  }

                  .ant-table .ant-table-row-indent + .ant-table-row-expand-icon {
                    flex-shrink: 0
                  }

                  td.nameColumn {
                      display:flex;
                      flex-direction:row;
                      align-items:center;
                      min-height:59px;
                  }

                  .hideColumn {
                      display:none;
                  }
           
                  `
              }
          </style>
            <Table columns={columns}  scroll={{ x:"100% ",y:this.props.scrollY} }
            {...this.props}
            dataSource = {this.props.breakdownBy==="campaign"?this.props.dataSource.map((c:any)=>{c.children=this.props.getDailys(14);return c;}):(this.props.breakdownBy==="flight"?this.props.dataSource.map((c:any)=>{c.children.map((f:any)=>{f.children=this.props.getDailys(14);});  return c;}):this.props.dataSource)}
            indentSize = {36}
            onExpand={(expanded:any, record:any)=>{
            //console.log(record);
            this.setState({nameColumnWidth:300});

            if(expanded && record.key.indexOf('flight')>=0 && this.props.breakdownBy==="flightset"){
                this.setState({nameColumnWidth:600})
            }
            if( record.key.indexOf('strategy')>=0){
                this.setState({nameColumnWidth:600})
            }
            }
}

/></div>
        
    
}

}



