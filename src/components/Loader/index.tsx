import React from "react"

import "./styles.css"

const Loader: React.FC = () => {
  return (
    <div className='spinner-container'>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loader
