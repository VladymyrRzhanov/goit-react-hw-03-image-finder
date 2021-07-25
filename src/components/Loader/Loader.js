import Loader from "react-loader-spinner";
import React, { Component } from 'react';

export default class App extends Component {
  
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}