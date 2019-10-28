import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card,Avatar } from 'antd';
//import PropTypes from 'prop-types';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  childrenType: string;
  footerBar:object;
  filterPanel:(toggle:object)=>{};
}

interface State {
  collapsed: boolean;
  filterPanelCollapsed:boolean;
}

export class TopLayout extends React.Component<Props, State>  {
  
//   static defaultProps: Props = {
//     products: []
// }


    state = {
        collapsed: false,
        filterPanelCollapsed:false,
      };
    
      onCollapse = (collapsed:boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

      onFilterToggle = () => {
        this.setState({ filterPanelCollapsed:!this.state.filterPanelCollapsed });
      };
    
      render() {
        return (
          <Layout style={{height:"100vh"}}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={256}>
              <div style={{height:64}} />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
       
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="desktop" />
                      <span>Campaign Management</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">Campaigns</Menu.Item>
                  <Menu.Item key="4">Flights</Menu.Item>
                  <Menu.Item key="5">Strategies</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="pie-chart" />
                      <span>Reporting</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">Report Builder</Menu.Item>
                  <Menu.Item key="8">Delivery Dashboard</Menu.Item>
                </SubMenu>
                
              </Menu>
            </Sider>

            <Layout style={{backgroundColor:"#f1f2f7"}}>
              <Header style={{padding:0,backgroundColor:"white",height:65}} >
                <Card
                bordered ={false}
                extra = {<Avatar icon="user" />}
                title = {
                <Breadcrumb style={{ margin: '0 24px' }}>
                <Breadcrumb.Item>First level menu</Breadcrumb.Item>
                <Breadcrumb.Item>Second level menu</Breadcrumb.Item>
              </Breadcrumb>}
                bodyStyle ={{padding:0}}>
                </Card>
              </Header>
              <Layout>
                
              <Content style={{ padding: '0 24px 0 24px',overflowX:"scroll", display:"flex",flexDirection:"column"}}>
        
                {this.props.children}
     
                <div style={{ flex:1 }}></div>
                
                </Content>
                {this.props.filterPanel&&this.props.childrenType==="report"?
              <Sider trigger={null} collapsedWidth={1} collapsible collapsed={this.state.filterPanelCollapsed}  width={256}
              style={{backgroundColor:"rgba(0,0,0,0)"}}>
                 {this.props.filterPanel(this.onFilterToggle)} 
              </Sider>:null
             }
              </Layout>
              <Footer style={{padding:0}}>
               <div>
                   {this.props.footerBar}
              </div>
               
              </Footer>
              
            </Layout>
          </Layout>
        );
      }
    }
    





