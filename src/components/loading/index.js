import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Indicator from '@/components/indicator';
import { Icon } from 'antd-mobile';
import { themr } from 'react-css-themr';
import styles from './index.module.less';

const Loading = ({ delay = 200, theme }) => {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const tid = setTimeout(() => setPast(true), delay);
    return () => clearTimeout(tid);
  });

  return (
    past ? (
      <Indicator>
        <Icon type='loading' className={ theme.icon }/>
      </Indicator>
    ) : null
  );
};

Loading.propTypes = {
  delay: PropTypes.number
};

export default themr('components/loading', styles)(Loading);
