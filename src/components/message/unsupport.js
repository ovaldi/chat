import React from 'react';
import Friend from '@/components/friend';
import { themr } from 'react-css-themr';
import styles from './unsupport.module.less';

const Unsupport = ({ friend, theme }) => {
  return (
    <div className={ theme.message }>
      <Friend data={ friend }/>
      <div className={ theme.text }>[Unsupport message]</div>
    </div>
  );
};

export default themr('components/message/unsupport', styles)(Unsupport);
