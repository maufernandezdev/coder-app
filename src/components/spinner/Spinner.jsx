import React from 'react';
// import Loader from 'react-loader-spinner';
import { ThreeDots } from  'react-loader-spinner'
import './Spinner.css'

const Loader = () => {
  return (
    <div className="spinner">
            {/* <Loader
              type="Oval"
              color="#000"
              height={50}
              width={50}
              timeout={2000}
            ></Loader>  */}
            <ThreeDots color="#000" height={80} width={80} />
        </div>
  )
}

export default Loader