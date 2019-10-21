import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/icon';
import { connect } from 'react-redux';
import { push } from '@/actions/router';
import TabBar from '@/components/tab-bar';

const Wrapper = ({ active, dispatch }) => {
  return (
    <TabBar>
      <TabBar.Item
        active={ active === 'list' }
        onPress={ () => dispatch(push('/list')) }
        icon={ <Icon type={ 'chat' }/> }
      >Chats</TabBar.Item>
      <TabBar.Item
        active={ active === 'me' }
        onPress={ () => dispatch(push('/me')) }
        icon={ <Icon type={ 'me' }/> }
      >Me</TabBar.Item>
    </TabBar>
  );
};

TabBar.propTypes = {
  active: PropTypes.string.isRequired
};

export default connect()(Wrapper);
