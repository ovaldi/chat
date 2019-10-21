import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked);

  if (checked !== props.checked) {
    setChecked(props.checked);
  }

  const classes = classnames(props.theme.checkbox, props.className, {
    [props.theme.checked]: checked
  });

  return (
    <span className={ classes }>
      <input
        type='checkbox'
        checked={ checked }
        value={ props.value }
        onChange={ e => {
          setChecked(e.target.checked);
          props.onChange(e.target.checked);
        } }
        className={ props.theme.input }
      />
    </span>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};

Checkbox.defaultProps = {
  onChange: () => {}
};

export default themr('components/checkbox', styles)(Checkbox);
