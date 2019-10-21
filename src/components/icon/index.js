import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

@themr('components/icon', styles)
class Icon extends PureComponent {
  render () {
    const { type, className, theme } = this.props;

    return (
      <svg className={ classnames(theme.iconfont, className) } aria-hidden='true' onClick={ this.onClick }>
        <use xlinkHref={ `#icon${type}` }></use>
      </svg>
    );
  }

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
}

export default Icon;
