import React from "react";
import { Component, ReactNode } from "react";
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout

export default class Layouts extends Component {
  state:{
    collapsed:boolean;
    menuList: {icon:string,name:string,toolTip:string}[];
  } = {
    collapsed: false,
    menuList: []
  };
  constructor (prop:any){
    super(prop)

  }
  componentDidMount(){
    this.setState({
      menuList:[{
        icon: "",
        name: "13132",
        toolTip: ""
      }]
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  toMenu() {  
    return (
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        {
          this.state.menuList.map<ReactNode>((item,index)=>(
            <Menu.Item key={index}>
              {item.name}
            </Menu.Item>
          ))
        }
      </Menu>
    )
  }
  render(): ReactNode {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          {this.toMenu()}
        </Sider>
        <Layout className="site-layout" style={{ height: '100vh' }}>
          {/* 头部 */}
          <Header style={{ padding: '0 10px', color: '#fff' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24
            }}
          >
            容器1
          </Content>
        </Layout>
      </Layout>
    )
  }
}