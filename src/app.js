import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScrollToTop from '@/components/scroll-to-top';

@connect()
class App extends React.PureComponent {
  constructor (props) {
    super(props);
    props.dispatch({
      type: 'app/init'
    });
  }

  render () {
    return (
      <ScrollToTop>
        { this.props.children }
      </ScrollToTop>
    );
  }
};

export default withRouter(App);
