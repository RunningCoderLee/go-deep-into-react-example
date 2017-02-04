import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '',
    };
  }

  handleSelectChange = (e) => {
    this.setState({
      area: e.target.value,
    });
  }

  render() {
    const { area } = this.state;

    return (
      <div>
        <h4>3. Select组件</h4>
        <select value={area} onChange={this.handleSelectChange}>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="guangzhou">广州</option>
        </select>
      </div>
    );
  }

}

export default Select;
