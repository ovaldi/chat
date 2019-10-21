import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, NavBar } from 'antd-mobile';
import { push, goBack } from '@/actions/router';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

@connect()
@themr('widgets/nav-bar', styles)
class Wrapper extends React.PureComponent {
  static propTypes = {
    backable: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    backable: true
  }

  handleLeftClick = () => {
    this.props.dispatch(history.length === 1 ? push('/m') : goBack());
  }

  render () {
    const { backable, children, theme } = this.props;

    return (
      <div className={ theme.wrapper }>
        <NavBar
          mode='light'
          className={ theme.navbar }
          icon={ backable ? <Icon type={ 'left' }/> : null }
          onLeftClick={ this.handleLeftClick }
        >{ children }</NavBar>
      </div>
    );
  }
}

export default Wrapper;
