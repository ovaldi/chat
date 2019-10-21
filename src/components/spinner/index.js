import React from 'react';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const Spinner = ({ children, theme }) => {
  return (
    <div
      className={ theme.spinner }
    >
      <div className={ theme.gif }/>
      <div>{ children }</div>
    </div>
  );
};

export default themr('components/spinner', styles)(Spinner);
