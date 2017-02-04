import React from 'react';
import TwoPointTwoPointOne from './twoPointTwoPointOne';
import TwoPointTwoPointTwo from './twoPointTwoPointTwo';
import TwoPointTwoPointThree from './twoPointTwoPointThree';

const TwoPointTwo = () => (
  <div>
    <h3>2.2.1 应用表单组件</h3>
    <TwoPointTwoPointOne />
    <h3>2.2.2 受控组件</h3>
    <TwoPointTwoPointTwo />
    <h3>2.2.3 非受控组件</h3>
    <TwoPointTwoPointThree />
  </div>
);

export default TwoPointTwo;

// class TwoPointTwo extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       inputValue    : '',
//       textareaValue : '',
//     };
//   }
//
//   handleInputChange = (e) => {
//     this.setState({
//       inputValue: e.target.value,
//     });
//   }
//
//   handleTextareaChange = (e) => {
//     this.setState({
//       textareaValue: e.target.value,
//     });
//   }
//
//   render() {
//     const { inputValue, textareaValue } = this.state;
//
//     return (
//       <div>
//         <h4>文本框</h4>
//         <p>单行输入框：<input type="text" value={inputValue} onChange={this.handleInputChange} /></p>
//         <p style={{ marginTop: 10 }}>
//           多行输入框：<textarea value={textareaValue} onChange={this.handleTextareaChange} />
//         </p>
//         <h4>单选按钮与复选框</h4>
//
//       </div>
//     );
//   }
// }

