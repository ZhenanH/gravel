import React from 'react';
import {Table,Button,Icon} from 'antd';
import { ColumnProps } from 'antd/es/table';



  interface Props {
    scroll: object;
    filterPanel:(toggle:object)=>{};
  }
  
  interface State {
    expandedRowKeys:Array<number>;
  }


export class  ExpandedTable extends React.Component<Props, State> {
 
    state = {
       expandedRowKeys:[]
      };
  
  
      toggleDaily = (index:number)=>{     
        if(index === this.state.expandedRowKeys[0]){
            this.setState({expandedRowKeys:[]});
        }else{
        this.setState({expandedRowKeys:[index]}); 
       } 
    }

   columns:ColumnProps<any>[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            width:50
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
          width:300
        },
        {
          title: "Today's Send",
          dataIndex: 'todaySend',
          key: 'todaySend',
          width:80
        },
        {
            title: "Today's Conversion",
            dataIndex: 'todayConversion',
            key: 'todayConversion',
            width:120
          },
          {
            title: 'Daily Goal',
            dataIndex: 'dailyGoal',
            key: 'dailyGoal',
            width:80
          },
        {
          title: 'Sends to Date',
          dataIndex: 'sendsToDate',
          key: 'sendsToDate',
          width:80
        },
        {
            title: 'Target Sends',
            dataIndex: 'targetSends',
            key: 'targetSends',
            width:80
          },
          {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            width:150
          },
          {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
            width:150
          },
          {
            title: 'Updated',
            dataIndex: 'updated',
            key: 'updated',
            width:150
          },
          {
            title: 'Forecasted Sends',
            dataIndex: 'forecastedSends',
            key: 'forecastedSends',
            width:120
          },
          {
            title: 'Forecasted Delivery %',
            dataIndex: 'forecastedDelivery',
            key: 'forecastedDelivery',
            width:120
          },
          {
            title: 'Current Delivery %',
            dataIndex: 'currentDelivery',
            key: 'currentDelivery',
            width:120
          },
          {
            title: 'Projected End Date',
            dataIndex: 'projectedEndDate',
            key: 'projectedEndDate',
            width:120
          },
          {
            title: 'Total Responses',
            dataIndex: 'totalResponses',
            key: 'totalResponses',
            width:120
          },
          {
            title: 'Total Order Value',
            dataIndex: 'totalOrderValue',
            key: 'totalOrderValue',
            width:120
          },
          {
            title: 'Conversion Rate',
            dataIndex: 'conversionRate',
            key: 'conversionRate',
            width:120
          },
          {
            title: 'CPA',
            dataIndex: 'cpa',
            key: 'cpa',
            width:80
          },
          {
            title: 'ROAS',
            dataIndex: 'roas',
            key: 'roas',
            width:80
          },
          {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            width:120,
            fixed:"right",
            render: (value:boolean,record:object,index:number) => value?[<Button onClick={()=>this.toggleDaily(index+1)} type="link" icon="bars"></Button>,<Button type="link" icon="file-excel"></Button>,<Button type="link" icon="delete"></Button>]:null
          }
    
     
      ];
    
      data = [
        {
          key: 1,
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
          key: 2,
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
      ];
        
        render(){
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
           
                  `
              }
          </style>
            <Table columns={this.columns} dataSource={this.data} scroll={ this.props.scroll }
expandIconAsCell={false} expandIconColumnIndex={-1}
expandedRowKeys={this.state.expandedRowKeys}/></div>
        
    
}

}



