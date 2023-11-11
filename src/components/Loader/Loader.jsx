import React, { Component } from 'react';
import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css'

class Loader extends Component {
  render() {
    return <div className={css.loader}>
      <Vortex
        visible={true}
        height="100"
        width="100"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>;
  }
}

export default Loader;
