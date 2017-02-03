/* eslint-disable */
import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';

class Tabs extends React.Component {
  static propTypes = {
    className   : PropTypes.string,
    classPrefix : PropTypes.string,
    children    : PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    defaultActiveIndex : PropTypes.number,
    activeIndex        : PropTypes.number,
    onChange           : PropTypes.func,
  }

  static defaultProps = {
    classPrefix : 'tabs',
  onChange    : () => {},
  };

  constructor(props) {
    super(props);

    const currProps = this.props;
    let activeIndex = 0;

    if ('activeIndex' in currProps) {
      activeIndex = currProps.activeIndex;
    } else if ('defaultActiveIndex' in currProps) {
      activeIndex = currProps.defaultActiveIndex;
    }

    this.state = {
      activeIndex,
      prevIndex: activeIndex,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('activeIndex' in nextProps) {
      this.setState({
        activeIndex: nextProps.activeIndex,
      });
    }
  }

  handleTabClick = (activeIndex) => {
    const prevIndex = this.state.prevIndex;

    if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex : activeIndex,
        prevIndex   : prevIndex,
      });

      this.props.onChange({ activeIndex, prevIndex });
    }
  }

  renderTabNav = () => {
    const { classPrefix, children } = this.props;

    return (
      <TabNav
        Key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    );
  }

  renderTabContent = () => {
    const { classPrefix, children } = this.props;

    return (
      <TabContent
        key="tabContent"
        classPrefix={classPrefix}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    );
  }

  render() {
    const { className } = this.props;
    const classes = classNames(className, 'ui-tabs');
    return (
      <div className={classes}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }
}

export default Tabs;
