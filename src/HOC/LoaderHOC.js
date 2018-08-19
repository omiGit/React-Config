import React, { Component } from 'react';
import _ from 'lodash';
import Loader from '../component/Loader/Loader';

export default propName => WrappedComponent => class LoaderHOC extends Component {
  isEmpty(prop) {
    return (
      prop === undefined
          || prop === null
          || (_.hasIn(prop, 'length') && prop.length === 0)
          || (prop.constructor === Object && _.keys('length') === 0)
    );
  }

  render() {
    return (
      this.isEmpty(this.props[propName]) || this.props.loading ? <Loader /> : <WrappedComponent {...this.props} />
    );
  }
};
