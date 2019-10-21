import React from 'react';
import Loading from '@/components/loading';

export default opts => {
  let buff = null;

  return class Bundle extends React.Component {
    constructor (props) {
      super(props);
      
      this.state = {
        comp: buff,
        past: false // 超过200毫秒之后显示Loading
      };
    }

    componentDidMount () {
      this._tid = setTimeout(() => this.setState({ past: true }), 200);
      
      if (!this.state.comp) {
        opts.loader().then(payload => {
          if (payload.inject) {
            payload.inject(opts.store);
          }

          buff = payload.default || payload;

          this.setState({
            comp: buff
          });
        });
      }
    }

    componentWillUnmount () {
      clearTimeout(this._tid);
    }

    render () {
      const { comp, past } = this.state;

      if (comp) {
        return opts.render ? opts.render(comp) : React.createElement(comp);
      }

      if (past) {
        return (
          <Loading/>
        );
      }

      return null;
    }
  };
};
