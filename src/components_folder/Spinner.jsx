import React from 'react';
import Cliploader from 'react-Spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({ loading }) => {
  return (
    <Cliploader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size = {150}
    />
  )
}

export default Spinner
