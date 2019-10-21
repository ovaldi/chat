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
        <Layout title='Me'>
          <Loading/>
        </Layout>
      );
    }

    return (
      <Layout title='Me'>
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
              <span className={ theme.coupon }>$100 available</span>
            }
          >Coupons</List.Item>
          <List.Item
            onClick={ () => dispatch(push('/expenses')) }
            arrow='horizontal'
            thumb={
              <Icon type='expenses' className={ theme.iconfont }/>
            }
          >Expenses</List.Item>
          <List.Item
            onClick={ () => dispatch(push('/cards')) }
            arrow='horizontal'
            thumb={
              <Icon type='bookmark' className={ theme.iconfont }/>
            }
          >Cards</List.Item>
        </List>

        <TabBar active='me'/>
      </Layout>
    );
  }
}

export default withRouter(Page);
