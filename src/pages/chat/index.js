import React from 'react';
import PropTypes from 'prop-types';
import saga from './saga';
import reducer from './reducer';
import NavBar from '@/widgets/nav-bar';
import Layout from '@/components/layout';
import Loading from '@/components/loading';
import Message from '@/components/message';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const page = state['pages/chat'];
  const friend = state.friend.byid[id];

  return {
    id,
    friend,
    messages: page.message[id] || []
  };
};

@connect(mapStateToProps)
@themr('pages/chat', styles)
class Page extends React.PureComponent {
  static propTypes = {
    friend: PropTypes.PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired
    }),
    messages: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.dispatch({
      type: 'pages/chat/init',
      payload: {
        id: this.props.id
      }
    });
  }

  render () {
    const { friend, messages, theme } = this.props;

    if (friend) {
      return (
        <Layout title={ friend.nickname }>
          <NavBar>{ friend.nickname }</NavBar>
          <div className={ theme.list }>
            {
              messages.map(it => (
                <Message
                  key={ it.id }
                  friend={ friend }
                  message={ it }
                />
              ))
            }
          </div>
        </Layout>
      );
    }

    return (
      <Loading/>
    );
  }
}

export const inject = store => {
  store.injectSaga('pages/chat', saga);
  store.injectReducer('pages/chat', reducer);
};

export default withRouter(Page);
