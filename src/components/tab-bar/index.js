import React from 'react';
import Item from './item';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

@themr('components/tab-bar', styles)
class TabBar extends React.PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    theme: PropTypes.shape({
      tabs: PropTypes.string.isReuired,
      inner: PropTypes.string.isReuired,
      tabbar: PropTypes.string.isReuired
    }).isRequired
  }

  render () {
    const { children, theme } = this.props;

    return (
      <div className={ theme.tabbar }>
        <div className={ theme.inner }>
          <div className={ theme.tabs }>{ children }</div>
        </div>
      </div>
    );
  }
}

TabBar.Item = Item;

export default TabBar;
