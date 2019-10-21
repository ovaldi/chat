import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'antd-mobile';
import { themr } from 'react-css-themr';
import styles from './item.module.less';

const Item = ({ friend, theme }) => {
  const background = {
    backgroundImage: `url(${friend.avatar})`
  };

  return (
    <div className={ theme.item }>
      <Flex className={ theme.head }>
        <div
          style={ background }
          className={ theme.avatar }
        />
        <Flex.Item>{ friend.nickname }</Flex.Item>
      </Flex>
    </div>
  );
};

Item.propTypes = {
  friend: PropTypes.PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired
  }).isRequired
};

export default themr('pages/list/item', styles)(Item);
