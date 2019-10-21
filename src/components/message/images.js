import React from 'react';
import Friend from '@/components/friend';
import { themr } from 'react-css-themr';
import styles from './images.module.less';

const Images = ({ friend, message, theme }) => {
  return (
    <div className={ theme.message }>
      <Friend data={ friend }/>
      <div className={ theme.inner }>
      {
        message.images.map((it, ix) => (
          <img
            key={ ix }
            src={ it }
            className={ theme.image }
          />
        ))
      }
      </div>
    </div>
  );
};

export default themr('components/message/images', styles)(Images);
