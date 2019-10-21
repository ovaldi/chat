import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import styles from './item.module.less';

@themr('components/tabbar/item', styles)
class Item extends React.PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired,
    theme: PropTypes.shape({
      tab: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      active: PropTypes.string.isRequired
    }).isRequired
  }

  static defaultProps = {
    active: false,
    onPress: () => {}
  }

  render () {
    const { icon, theme, active, onPress, children } = this.props;

    const classes = classnames(theme.tab, {
      [theme.active]: active
    });

    return (
      <div className={ classes } onClick={ onPress } >
        <div>{ icon }</div>
        <p className={ theme.title }>{ children }</p>
      </div>
    );
  }
}

export default Item;
