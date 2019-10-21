import React from 'react';
import { Flex } from 'antd-mobile';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import styles from './profile.module.less';

@themr('pages/me/profile', styles)
class Profile extends React.PureComponent {
  static propTypes = {
    profile: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired
    }).isRequired
  }

  render () {
    const { profile, theme } = this.props;
    const { id, nickname, avatar } = profile;
    const background = { backgroundImage: `url(${avatar})` };

    return (
      <div className={ theme.profile }>
        <Flex align='start'>
          <Flex.Item>
            <div className={ theme.nickname }>{ nickname }</div>
            <div
              className={ theme.detail }
            >
              <div className={ theme.crown }/>
              <div>ID: { id }</div>
            </div>
            
            <div className={ theme.welth }>
              Coins:<span className={ theme.number }>10086</span>
            </div>
          </Flex.Item>
          <div className={ theme.avatar } style={ background }></div>
        </Flex>
      </div>
    );
  }
}

export default Profile;
