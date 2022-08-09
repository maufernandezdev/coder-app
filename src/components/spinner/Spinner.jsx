import React from 'react';
import { ThreeDots } from  'react-loader-spinner'
import './Spinner.css'

const Loader = () => {
  return (
    <div className="spinner">
      <ThreeDots color="#000" height={80} width={80} />
    </div>
  )
}

export default Loader