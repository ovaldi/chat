import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputItem, Button } from 'antd-mobile';

import { themr } from 'react-css-themr';
import styles from './form.module.less';

@connect()
@themr('pages/login/form', styles)
class Form extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      email: '232280074@qq.com',
      password: 'abc123'
    };
  }

  static getDerivedStateFromProps (nextProps) {
    return {
      checked: nextProps.checked
    };
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    if (_.isEmpty(email)) {
      this.props.dispatch({
        type: 'toast/failure',
        payload: 'Please enter email'
      });
      return;
    }

    if (_.isEmpty(password)) {
      this.props.dispatch({
        type: 'toast/failure',
        payload: 'Please enter password'
      });
      return;
    }

    this.props.onSubmit({
      email,
      password
    });
  }

  handleChangeCode = code => {
    this.setState({ code });
  }

  handleChangePhone = phone => {
    this.setState({ phone });
  }

  render () {
    const { theme } = this.props;
    const { email, password } = this.state;
    
    return (
      <div className={ theme.form }>
        <InputItem
          name='email'
          type='text'
          maxLength='11'
          placeholder='Email'
          value={ email }
          onChange={ this.handleChangePhone }
          clear
        />
        <InputItem
          name='password'
          type='password'
          maxLength='8'
          placeholder='Password'
          value={ password }
          onChange={ this.handleChangeCode }
          ref={ el => this._refCode = el }
          clear
        ></InputItem>
        <Button
          type='primary'
          onClick={ this.handleSubmit }
        >Log In</Button>
      </div>
    );
  }
}

export default Form;
