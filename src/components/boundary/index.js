import React from 'react';
import Nothing from '@/components/nothing';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

@themr('components/boundary', styles)
class Boundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch (error, extra) {
    this.setState({ error });
    if (process.env.NODE_ENV === 'production' && Raven) {
      Raven.captureException(error, { extra });
    }
  }

  render () {
    const { theme, children } = this.props;

    if (this.state.error) {
      // render fallback UI
      return (
        <Nothing>
          <div>服务器开小差了</div>
          <a href='/list' className={ theme.refresh }>刷新页面</a>
        </Nothing>
      );
    }
    // when there's not an error, render children untouched
    return children;
  }
}

export default Boundary;
