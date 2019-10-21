import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

function Baseline ({ text, className, theme }) {
  const classes = classnames(theme.baseline, className);

  return (
    <div className={ classes }>
      <div className={ theme.inner }>{ text }</div>
    </div>
  );
}

export default themr('components/baseline', styles)(Baseline);
