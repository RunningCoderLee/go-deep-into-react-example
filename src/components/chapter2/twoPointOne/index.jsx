/* eslint-disable */
import React from 'react';

class TwoPointOne extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickByBindInCons = this.handleClickByBindInCons.bind(this);
  }

  handleClickByBind(e, arg) {
    console.log('handleClickByBind', e, arg)
  }

  handleClickByBindInCons(e) {
    console.log('handleClickByBindInCons', e)
  }

  handleClickByDoubleColon(e) {
    console.log('handleClickByDoubleColon',e)
  }

  handleClickByArrowFunc1 = (e) => {
    console.log('handleClickByArrowFunc1', e)
  }

  handleClickByArrowFunc2(e) {
    console.log('handleClickByArrowFunc2', e)
  }

  render() {
    return (
      <div>
        <button className="ant-btn" onClick={this.handleClickByBindInCons}>By Bind In Constructor</button>
        &emsp;
        <button className="ant-btn" onClick={this.handleClickByBind.bind(this, 'ByBind')}>By Bind</button>
        &emsp;
        <button className="ant-btn" onClick={::this.handleClickByDoubleColon}>By Double Colon</button>
        &emsp;
        <button className="ant-btn" onClick={this.handleClickByArrowFunc1}>By Arrow Function 1</button>
        &emsp;
        <button className="ant-btn" onClick={() => this.handleClickByArrowFunc2()}>By Arrow Function 2</button>
      </div>
    )
  }
}

export default TwoPointOne;
