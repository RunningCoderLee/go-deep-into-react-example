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
        <button onClick={this.handleClickByBindInCons}>By Bind In Constructor</button>
        <br />
        <br />
        <button onClick={this.handleClickByBind.bind(this, 'ByBind')}>By Bind</button>
        <br />
        <br />
        {/* <button onClick={::this.handleClickByDoubleColon}>By Double Colon</button> */}
        <br />
        <br />
        <button onClick={this.handleClickByArrowFunc1}>By Arrow Function 1</button>
        <br />
        <br />
        <button onClick={() => this.handleClickByArrowFunc2()}>By Arrow Function 2</button>
      </div>
    )
  }
}

export default TwoPointOne;
