import React from 'react';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const Friend = ({ data, theme }) => {
  return (
    <div className={ theme.friend }>
      <img
        src={ data.avatar }
        className={ theme.avatar }
      />
      <div className={ theme.nickname }>{ data.nickname }</div>
    </div>
  );
};

export default themr('components/friend', styles)(Friend);
