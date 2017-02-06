import React from 'react';
import styles from '../twoPointTwo.scss';

class RadioAndCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue : '',
      coffee     : [],
    };
  }

  handleRadioChange = (e) => {
    this.setState({
      radioValue: e.target.value,
    });
  }

  handleCheckBoxChange = (e) => {
    const { checked, value } = e.target;
    let { coffee } = this.state;

    if (checked && coffee.indexOf(value) === -1) {
      coffee.push(value);
    } else {
      coffee = coffee.filter(i => i !== value);
    }

    this.setState({
      coffee,
    });
  }

  render() {
    const { radioValue, coffee } = this.state;

    return (
      <div>
        <h4>2. 单选按钮与复选框</h4>
        <div className="radio">
          <p>gender:</p>
          <label htmlFor="radio-male">
            male:
            <input
              id="radio-male"
              type="radio"
              value="male"
              className={styles['input-radio']}
              checked={radioValue === 'male'}
              onChange={this.handleRadioChange}
            />
          </label>
          <label htmlFor="radio-female">
            female:
            <input
              id="radio-female"
              type="radio"
              value="female"
              className={styles['input-radio']}
              checked={radioValue === 'female'}
              onChange={this.handleRadioChange}
            />
          </label>
        </div>
        <div className="checked">
          <p>请选择你最喜欢的咖啡：</p>
          <label htmlFor="checkbox-cappuccino">
            <input
              id="checkbox-cappuccino"
              type="checkbox"
              value="Cappuccino"
              checked={coffee.indexOf('Cappuccino') !== -1}
              onChange={this.handleCheckBoxChange}
            />
            Cappuccino
          </label>
          <br />
          <label htmlFor="checkbox-mocha">
            <input
              id="checkbox-mocha"
              type="checkbox"
              value="Mocha"
              checked={coffee.indexOf('Mocha') !== -1}
              onChange={this.handleCheckBoxChange}
            />
            Mocha
          </label>
          <br />
          <label htmlFor="checkbox-latte">
            <input
              id="checkbox-latte"
              type="checkbox"
              value="Latte"
              checked={coffee.indexOf('Latte') !== -1}
              onChange={this.handleCheckBoxChange}
            />
            Latte
          </label>
          <br />
          <label htmlFor="checkbox-machiatto">
            <input
              id="checkbox-machiatto"
              type="checkbox"
              value="Machiatto"
              checked={coffee.indexOf('Machiatto') !== -1}
              onChange={this.handleCheckBoxChange}
            />
            Machiatto
          </label>
        </div>
      </div>
    );
  }
}

export default RadioAndCheckbox;
