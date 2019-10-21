import React from 'react';
import { themr } from 'react-css-themr';
import styles from './notice.module.less';

const Notice = ({ message, theme }) => {
  return (
    <div className={ theme.message }>
      { message.notice }
    </div>
  );
};

export default themr('components/message/notice', styles)(Notice);
