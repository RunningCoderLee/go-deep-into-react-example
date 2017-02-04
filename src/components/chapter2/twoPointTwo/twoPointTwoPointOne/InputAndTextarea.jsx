import React from 'react';

class InputAndTextarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue    : '',
      textareaValue : '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleTextareaChange = (e) => {
    this.setState({
      textareaValue: e.target.value,
    });
  }

  render() {
    const { inputValue, textareaValue } = this.state;

    return (
      <div>
        <h4>1. 文本框</h4>
        <p>单行输入框：<input type="text" value={inputValue} onChange={this.handleInputChange} /></p>
        <p style={{ marginTop: 10 }}>
          多行输入框：<textarea value={textareaValue} onChange={this.handleTextareaChange} />
        </p>
      </div>
    );
  }
}

export default InputAndTextarea;
