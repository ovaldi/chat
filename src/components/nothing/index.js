import React from 'react';
import { themr } from 'react-css-themr';
import Icon from '@/components/icon';
import styles from './index.module.less';

function Nothing ({ theme, children }) {
  return (
    <div className={ theme.nothing }>
      <Icon type='empty' className={ theme.iconfont }/>
      <div className={ theme.info }>{ children }</div>
    </div>
  );
}

export default themr('components/nothing', styles)(Nothing);
