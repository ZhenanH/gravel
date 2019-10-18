import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Card,Avatar } from 'antd';
//import PropTypes from 'prop-types';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  childrenType: string;
  footerBar:object;
}

interface State {
  collapsed: boolean;
}

export class TopLayout extends React.Component<Props, State>  {
  
//   static defaultProps: Props = {
//     products: []
// }


    state = {
        collapsed: false,
      };
    
      onCollapse = (collapsed:any) => {
        console.log(collapsed);
        this.setState({ collapsed });
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
                <Breadcrumb.Item>Campaign Management</Breadcrumb.Item>
                <Breadcrumb.Item>Campaigns</Breadcrumb.Item>
              </Breadcrumb>}
                bodyStyle ={{padding:0}}>
                </Card>
              </Header>
              <Content style={{ margin: '0 0 0 24px',overflowX:"scroll", display:"flex",flexDirection:"column"}}>
              {
                this.props.childrenType==="table"?
                this.props.children:
                <div style={{marginLeft:"auto",marginRight:"auto" ,width:976}}>
                {this.props.children}
                </div>}
                <div style={{ flex:1 }}></div>
                <div style={{ textAlign: 'center',padding:"0 0 24px 0" }}>Pebblepost ©2019</div>

                </Content>

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
    





