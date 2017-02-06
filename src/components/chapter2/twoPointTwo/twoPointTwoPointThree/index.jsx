import React from 'react';

class TwoPointTwoPointThree extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { value } = this.input;
    console.log(value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={(c) => { this.input = c; }} />
        <button style={{ marginLeft: 5 }} className="ant-btn" type="submit">Submit</button>
      </form>
    );
  }

}

export default TwoPointTwoPointThree;
