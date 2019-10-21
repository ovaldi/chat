import React from 'react';
import auth from '@/utils/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '@/components/spinner';
import { withRouter } from 'react-router-dom';
import { uri } from '@/selectors/router';

const mapStateToProps = state => ({
  next: uri(state)
});

export default comp => {
  @connect(mapStateToProps)
  class Authorize extends React.PureComponent {
    static propTypes = {
      render: PropTypes.func,
      next: PropTypes.string.isRequired,
      location: PropTypes.object.isRequired
    }

    componentDidMount () {
      if (!auth.isAuthenticated()) {
        this.props.dispatch({
          type: 'navi/login',
          payload: {
            replace: true,
            next: encodeURIComponent(this.props.next)
          }
        });
      }
    }

    componentDidUpdate (prevProps) {
      if (prevProps.location !== this.props.location && !auth.isAuthenticated()) {
        this.props.dispatch({
          type: 'navi/login',
          payload: {
            replace: true,
            next: encodeURIComponent(this.props.next)
          }
        });
      }
    }

    render () {
      if (auth.isAuthenticated()) {
        return React.createElement(comp);
      }

      return (
        <div>
          <Spinner>正在加载...</Spinner>
        </div>
      );
    }
  };

  return withRouter(Authorize);
};
