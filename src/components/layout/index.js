import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props);
    document.title = props.title || '加载中...';
  }

  componentDidUpdate () {
    document.title = this.props.title || '加载中...';
  }

  render () {
    const { children, className } = this.props;
    
    return (
      <div className={ className }>
        { children }
      </div>
    );
  }
}

export default Layout;
