import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Profile from './profile';
import Icon from '@/components/icon';
import TabBar from '@/widgets/tab-bar';
import Layout from '@/components/layout';
import Loading from '@/components/loading';
import { withRouter } from 'react-router-dom';
import { List, WhiteSpace } from 'antd-mobile';

import { push } from '@/actions/router';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const mapStateToProps = state => ({
  profile: state.profile
});

@themr('pages/me', styles)
@connect(mapStateToProps)
class Page extends React.PureComponent {
  static propTypes = {
    profile: PropTypes.object
  }

  componentDidMount () {
    this.props.dispatch({
      type: 'pages/me/init'
    });
  }

  render () {
    const { profile, theme, dispatch } = this.props;

    if (_.isEmpty(profile)) {
      return (
        <Layout title='我的'>
          <Loading/>
        </Layout>
      );
    }

    return (
      <Layout title='我的'>
        <Profile
          profile={ profile }
        />
        
        <WhiteSpace size='sm'/>

        <List>
          <List.Item
            arrow='horizontal'
            onClick={ () => dispatch(push('/coupons')) }
            thumb={ <Icon type='coupon' className={ theme.iconfont }/> }
            extra={
              <span className={ theme.coupon }>100元可用</span>
            }
          >我的优惠券</List.Item>
          <List.Item
            onClick={ () => dispatch(push('/expenses')) }
            arrow='horizontal'
            thumb={
              <Icon type='expenses' className={ theme.iconfont }/>
            }
          >消费记录</List.Item>
          <List.Item
            onClick={ () => dispatch(push('/readlogs')) }
            arrow='horizontal'
            thumb={
              <Icon type='bookmark' className={ theme.iconfont }/>
            }
          >阅读历史</List.Item>
        </List>

        <TabBar active='me'/>
      </Layout>
    );
  }
}

export default withRouter(Page);
