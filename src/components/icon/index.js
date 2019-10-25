import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

class Icon extends PureComponent {
  render () {
    const { type, className, theme } = this.props;

    return (
      <svg
        onClick={ this.handleClick }
        className={ classnames(theme.iconfont, className) }
      >
        <use xlinkHref={ `#icon${type}` }></use>
      </svg>
    );
  }

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
}

export default themr('components/icon', styles);
