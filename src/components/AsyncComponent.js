import React, { Component } from "react";
import spinner from '../assets/images/blog-spinner.gif';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <div style={{background:'white', display:'flex', width:'100%', height:window.innerHeight, justifyContent:'center', alignItems:'center'}}>
          <img style={{width:'20%'}} src={spinner} alt="mik"/>
      </div>;
    }
  }

  return AsyncComponent;
}