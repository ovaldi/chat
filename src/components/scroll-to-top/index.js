import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.PureComponent {
  componentDidUpdate (prevProps) {
    // 大部分浏览器会自动保留页面滚动位置
    // 这里需要处理的case是: A页面滚动100px，然后跳转到B页面，B页面的滚动条也会停在100px
    const { history, location } = this.props;
    if (history.action !== 'POP' && location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
