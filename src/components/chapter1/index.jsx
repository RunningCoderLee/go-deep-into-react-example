import React from 'react';
import CSSModules from 'react-css-modules';
import { Radio } from 'antd';
import Tabs from './Tabs';
import TabPane from './Tabs/TabPane';
import styles from './chapter1.scss';

const RadioGroup = Radio.Group;
const CONTROL_MODE = {
  inner : 'inner',
  outer : 'outer',
};

class ChapterOne extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);

    this.state = {
      activeIndex   : 0,
      tabControlled : false,
      controlMode   : CONTROL_MODE.inner,
    };
  }

  handleSelectChange(e) {
    this.setState({
      activeIndex: parseInt(e.target.value, 10),
    });
  }

  handleRadioChange(e) {
    this.setState({
      controlMode: e.target.value,
    });
  }

  renderTabs() {
    // 内部更新activeIndex
    if (this.state.controlMode === CONTROL_MODE.inner) {
      return (
        <Tabs
          styleName="bar"
          activeIndex={this.state.activeIndex}
        >
          <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
          <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
          <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
        </Tabs>
      );
    }

    // 外部更新
    return (
      <Tabs
        styleName="bar"
        defaultActiveIndex={0}
      >
        <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
        <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
        <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
      </Tabs>
    );
  }

  render() {
    return (
      <div>
        <h3>Tab组件ActiveIndex更新方式</h3>
        <div styleName="control-mode">
          <RadioGroup
            onChange={this.handleRadioChange}
            defaultValue={CONTROL_MODE.inner}
          >
            <Radio value={CONTROL_MODE.inner}>内部更新</Radio>
            <Radio value={CONTROL_MODE.outer}>外部更新</Radio>
          </RadioGroup>
        </div>
        <div styleName="operator">
          <span>切换 Tab：</span>
          <select value={this.state.activeIndex} onChange={this.handleSelectChange}>
            <option value="0">Tab 1</option>
            <option value="1">Tab 2</option>
            <option value="2">Tab 3</option>
          </select>
        </div>
        {this.renderTabs()}
      </div>
    );
  }
}

export default CSSModules(ChapterOne, styles);
