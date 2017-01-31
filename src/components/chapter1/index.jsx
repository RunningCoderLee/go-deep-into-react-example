import React from 'react';
import Tabs from './Tabs';
import TabPane from './Tabs/TabPane';

class ChapterOne extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      activeIndex   : 0,
      tabControlled : false,
    };
  }

  handleChange(e) {
    this.setState({
      activeIndex: parseInt(e.target.value, 10),
    });
  }

  render() {
    const { tabControlled } = this.state;
    // 这里切换 select 中的选项是没有作用的，因为使用的是 defaultActiveIndex，
    // 如果想要作用的话，要把 defaultActiveIndex 改成 activeIndex 就可以
    return (
      <div>
        <div className="operator">
          <span>切换 Tab：</span>
          <select value={this.state.activeIndex} onChange={this.handleChange}>
            <option value="0">Tab 1</option>
            <option value="1">Tab 2</option>
            <option value="2">Tab 3</option>
          </select>
        </div>
        <Tabs
          className="tabs-bar"
          defaultActiveIndex={0}
          activeIndex={tabControlled ? this.state.activeIndex : undefined}
        >
          <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
          <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
          <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ChapterOne;
