import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import saga from './saga';
import Item from './item';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import TabBar from '@/widgets/tab-bar';
import NavBar from '@/widgets/nav-bar';
import Layout from '@/components/layout';
import Loading from '@/components/loading';
import Baseline from '@/components/baseline';

const mapStateToProps = state => {
  const loading = state.global.loading;
  const friends = state.friend.entities.map(id => state.friend.byid[id]);

  return {
    loading,
    friends
  };
};

@connect(mapStateToProps)
class Page extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    friends: PropTypes.array.isRequired
  }

  static defaultProps = {
    loading: false,
    friends: []
  }

  componentDidMount () {
    this.props.dispatch({
      type: 'pages/list/init'
    });
  }

  renderListRow = it => {
    return (
      <List.Item key={ it.id }>
        <Link
          to={ `/chat/${it.id}` }
        >
          <Item friend={ it }/>
        </Link>
      </List.Item>
    );
  }

  renderListFooter = () => {
    return (
      <Baseline text='End'/>
    );
  }

  render () {
    const { loading, friends } = this.props;

    return (
      <Layout title='Chat List'>
        <NavBar backable={ false }>Chat List</NavBar>
        {
          loading ? (
            <Loading/>
          ) : (
            <List renderFooter={ this.renderListFooter }>
            {
              friends.map(this.renderListRow)
            }
            </List>
          )
        }
        <TabBar active='list'/>
      </Layout>
    );
  }
}

export const inject = store => {
  store.injectSaga('pages/list', saga);
};

export default Page;
