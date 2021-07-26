import Loader from "react-loader-spinner";
import React from 'react';

const Spinner = () => (
    <Loader
      type="ThreeDots"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000}
    />
);

export default Spinner;