import React from 'react';
import Friend from '@/components/friend';
import { themr } from 'react-css-themr';
import styles from './text.module.less';

const Text = React.memo(({ friend, message, theme }) => {
  return (
    <div className={ theme.message }>
      <Friend data={ friend }/>
      <div className={ theme.text }>{ message.text }</div>
    </div>
  );
});

export default themr('components/message/text', styles)(Text);
