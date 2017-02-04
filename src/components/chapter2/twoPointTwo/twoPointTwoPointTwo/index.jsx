import React from 'react';

class TwoPointTwoPointTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value.substring(0, 140).toUpperCase(),
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <p>只能输入140个字符，且会自动转换为大写：</p>
        <input style={{ minWidth: 600 }} value={value} onChange={this.handleChange} />
      </div>
    );
  }

}

export default TwoPointTwoPointTwo;
