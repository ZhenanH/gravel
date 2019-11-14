import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    categery: <div style={{color:"black"}}>Primary User</div>,
    in: "Campaign manager(Campaign, flight, strategy manager and builder, etc) and internal dashboards (Pacing, CLF, etc) are designed to support OM and TAM for campaign setup, and QA. They are familiar with data-intensive UI and working hard to identify errors and mistakes on day to day basis.",
    ex: 'External dashboards(Delivery dashboard, Performance dashboard) are designed for brands, sales team to quickly learn about campaign status and performance. They are sensitive to key metrics and try to make sense of data, and use the dashboard couple times a week.',
  },

  {
    key: '22',
    categery: <div style={{color:"black"}}>Display data and content</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Totality over partiality</div>
    Stretch layout to accommodate important information(e.g. entity name, id, data value) instead of truncating information.</div>,
    ex: 'Same',
  },
  {
    key: '2',
    categery: <div style={{color:"black"}}>Display data and content</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Hide learnable instruction</div>
Redundant info is useful but not needed all the time. Use tooltip to keep the UI clean and legible, and use icons to indicate something is hoverable.</div>,
    ex: 'Same',
  },
  {
    key: '3',
    categery: <div style={{color:"black"}}>Layout</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Content over navigation</div> 
OM use campaign dashboard on a daily basis. They are familiar enough with the layout and would like to focus on content as much as possible. Minimizing space for navigational elements to make space for content.</div>
,
    ex: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Stay Orientated</div>
    Navigation hierarchy needs to be clear enough to indicate users are looking at right place for the right data.</div> ,
  },
  {
    key: '32',
    categery: <div style={{color:"black"}}>Layout</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Data entering VS Data browsing</div> 
Centering form layout to help user focus on data entering tasks. Maximizing space for data browsing layout to facilitate QA activities like scanning, comparing, searching, identifying.</div>
,
    ex: 'Same',
  },
  {
    key: '4',
    categery: <div style={{color:"black"}}>Visualization</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Raw data is more important than charts</div> 
OM need precise verification and confirmation on data to make sure everything works correctly.</div>,
    ex: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Graphical representation tell better story</div> 
Graphics can tell a story more quickly and help users make sense of numbers</div>,
  },
  {
    key: '42',
    categery: <div style={{color:"black"}}>Visualization</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Actionable and insightful over beautiful</div>  
OM need to deal with multiple accounts everyday, they need tools (i.e. visual symbols, color-coded message) instead of just eye candy to help lowering their cognitive load.</div>,
    ex: 'Same',
  },
  {
    key: '5',
    categery: <div style={{color:"black"}}>Interaction</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Action should be contextual</div> 
Show action dialogs near where the click happens, which reduce user's reasoning effort for what just happened.</div>,
    ex: 'Same',
  },
  {
    key: '5',
    categery: <div style={{color:"black"}}>Interaction</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Feedback should be visible</div>
The result of and action need to be obvious enough and not easily missed.</div>,
    ex: 'Same',
  },
  {
    key: '5',
    categery: <div style={{color:"black"}}>Interaction</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>High risk operation should be confirmable or recoverable</div>  
Actions like launching a flight, approving creatives need to be confirmed. We can also consider make actions recoverable to reduce the need for confirming and makes the actions more smooth. For example, deleting entities.</div>,
    ex: 'Same',
  },{
    key: '5',
    categery: <div style={{color:"black"}}>Interaction</div>,
    in: <div><div style={{color:"black",fontWeight:600,fontSize:16}}>Use transitions as visual cues</div>
Transitions are good at visually explain how users arrive at currently page or how entities are changed from their previous states, thus providing more context and sense of control to users.</div>,
    ex: 'Same',
  },
];

const columns = [
  {
    title: '',
    dataIndex: 'categery',
    key: 'categery',
    render:(value:any, row:any, index:any) => {
      const obj = {
        children: value,
        props: {
          rowSpan:1
        },
      };
       if (index === 1) {
        obj.props.rowSpan = 2;
      }
      if (index === 2) {
        obj.props.rowSpan = 0;
      }
      if (index === 3) {
        obj.props.rowSpan = 2;
      }
      if (index === 4) {
        obj.props.rowSpan = 0;
      }
      if (index === 5) {
        obj.props.rowSpan = 2;
      }
      if (index === 6) {
        obj.props.rowSpan = 0;
      }
      if (index === 7) {
        obj.props.rowSpan = 4;
      }
      if (index === 8) {
        obj.props.rowSpan = 0;
      }
      if (index === 9) {
        obj.props.rowSpan = 0;
      }
      if (index === 10) {
        obj.props.rowSpan = 0;
      }
     
      return obj
    },
  },
  {
    title: 'Campaign Manager & Internal Dashboards ',
    dataIndex: 'in',
    key: 'in',
  },
  {
    title: 'External Dashboards',
    dataIndex: 'ex',
    key: 'ex',
  },
];
class Intro extends React.Component {

  render() {
    return (
      <div className="doc-container">
        <h1>Design Guideline</h1>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    );
  }

}

export default Intro;