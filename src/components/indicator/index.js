import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const Indicator = ({ children, className, theme }) => {
  const classes = classnames(theme.indicator, className);

  return (
    <div className={ classes }>
      <div className={ theme.text }>{ children }</div>
    </div>
  );
};

export default themr('components/indicator', styles)(Indicator);
