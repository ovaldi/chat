import React from 'react';
import Text from './text';
import Images from './images';
import Notice from './notice';
import Unsupport from './unsupport';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const hash = {
  text: Text,
  images: Images,
  notice: Notice
};

const Message = React.memo(({ friend, message, theme }) => {
  const comp = hash[message.type] || Unsupport;
  const inst = React.createElement(comp, {
    friend,
    message
  });

  return (
    <div>
      <div className={ theme.date }>{ format(message.date, 'YYYY-MM-DD HH:mm') }</div>
      { inst }
    </div>
  );
});

Message.propTypes = {
  friend: PropTypes.PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired
  }).isRequired,
  message: PropTypes.object.isRequired
};

export default themr('components/message', styles)(Message);
