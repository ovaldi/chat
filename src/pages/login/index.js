import auth from '@/utils/auth';
import React from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import saga from './saga';
import Form from './form';
import Loading from '@/components/loading';
import Layout from '@/components/layout';
import NavBar from '@/widgets/nav-bar';

import { themr } from 'react-css-themr';
import styles from './index.module.less';

const mapStateToProps = state => {
  const query = qs.parse(state.router.location.search);

  return {
    next: query.next || '/list'
  };
};

@themr('pages/login', styles)
@connect(mapStateToProps)
class Page extends React.PureComponent {
  static propTypes = {
    next: PropTypes.string.isRequired
  }

  componentWillMount () {
    this.props.dispatch({
      type: 'pages/login/init',
      payload: {
        next: this.props.next
      }
    });
  }

  handleSubmit = ({ email, password }) => {
    this.props.dispatch({
      type: 'pages/login/post',
      payload: {
        email,
        password,
        next: this.props.next
      }
    });
  }

  render () {
    const { theme } = this.props;
    
    if (auth.isAuthenticated()) {
      return (
        <Loading/>
      );
    }

    return (
      <Layout title='Welcome'>
        <NavBar>Welcome</NavBar>

        <div className={ theme.member }>
          <div className={ theme.avatar }></div>
          <div className={ theme.nickname }>Hello</div>
        </div>

        <Form onSubmit={ this.handleSubmit }/>
      </Layout>
    );
  }
}

export const inject = store => {
  store.injectSaga('pages/login', saga);
};

export default Page;
