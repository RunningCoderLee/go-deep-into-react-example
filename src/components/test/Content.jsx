import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Button } from 'antd';
// import logo from './logo.svg';
import styles from './content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    //eslint-disable-next-line
    console.log(111);
  }

  render() {
    return (
      <div styleName="App">
        <div styleName="App-header">
          <img styleName="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div styleName="logo" />
        <Button type="primary" onClick={this.handleClick}>按钮</Button>
      </div>
    );
  }
}

export default CSSModules(Content, styles);
