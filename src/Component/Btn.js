import React from 'react'
import '../App.css'

const Btn = ({title,...options}) => {
  return (
    <div>
        <button  {...options}>{title}</button>
    </div>
  )
}

export default Btn