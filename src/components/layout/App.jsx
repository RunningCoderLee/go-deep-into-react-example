import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from 'Media/logo.svg';
import { NAVIGATION } from 'Constants';
import NavLink from '../NavLink';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static propTypes = {
    children : PropTypes.node,
    location : PropTypes.shape({
      pathname : PropTypes.string,
      state    : PropTypes.shape({
        selectedKeys: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }

  constructor(props) {
    super(props);

    const activeIndex = NAVIGATION.findIndex(item =>
      item.path === props.location.pathname);

    this.state = {
      collapsed    : false,
      selectedKeys : activeIndex >= 0 ? [activeIndex.toString()] : [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return;
    }

    const activeIndex = NAVIGATION.findIndex(item =>
      item.path === nextProps.location.pathname);

    this.setState({
      selectedKeys: activeIndex >= 0 ? [activeIndex.toString()] : [],
    });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  renderMenuItems = () => (
    NAVIGATION.map((item, index) => (
      <Menu.Item key={index}>
        <NavLink to={item.path}>
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-text">{item.title}</span>
        </NavLink>
      </Menu.Item>
    ))
  )

  render() {
    const { children } = this.props;
    const { selectedKeys } = this.state;

    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo-root">
            <Link to="/home"><img src={logo} className="logo" alt="logo" /></Link>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
          >
            {this.renderMenuItems()}
          </Menu>
        </Sider>
        <Layout>
          <Header className="layout-header">Go deep into React - Example codes</Header>
          <Content className="layout-content-wrapper">
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="layout-content" >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
