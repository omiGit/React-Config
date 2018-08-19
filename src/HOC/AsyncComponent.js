import React, { Component } from 'react';
// import Loader from '../../component/Loader/Loader';

const Loader = () => (
  <div>
Loading..
  </div>
);
export default Imcomp => class Async extends Component {
    state={
      Comp: null
    }

    componentDidMount() {
      Imcomp().then(module => this.setState({ comp: module.default }));
    }

    render() {
      const { Comp } = this.state;
      return (
        !Comp ? <Loader /> : <Comp {...this.props} />
      );
    }
};
