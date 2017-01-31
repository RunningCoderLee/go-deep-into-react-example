import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';
import { NAVIGATION } from 'Constants';
import CSSModules from 'react-css-modules';
import logo from 'Media/logo.svg';
import styles from './home.scss';

function renderChapterButtons() {
  return NAVIGATION.map((item, index) => (
    <Button
      key={`nav-${index}`}
      size="large"
      styleName="menu-btn"
    >
      <Link to={item.path}>{item.title}</Link>
    </Button>
  ));
}

const Home = () => (
  <div styleName="wrapper">
    <div styleName="header">
      <img src={logo} styleName="logo" alt="logo" />
      <h2>Go deep into React - Example codes</h2>
    </div>
    {renderChapterButtons()}
  </div>
);

export default CSSModules(Home, styles);
