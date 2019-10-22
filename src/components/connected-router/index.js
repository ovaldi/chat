import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { change as locationChange } from '@/actions/router';

class ConnectedRouter extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  constructor (props) {
    super(props);
    this.unsubscribeFromHistory = this.props.history.listen(this.handleLocationChange(this.props.store));
  }

  componentWillUnmount () {
    if (this.unsubscribeFromHistory) {
      this.unsubscribeFromHistory();
    }
  }

  handleLocationChange = ({ dispatch }) => {
    return (location, method) => dispatch(locationChange({ method, location }));
  }

  render () {
    return (
      <HashRouter { ...this.props } />
    );
  }
}

export default ConnectedRouter;
