import React from 'react'

const Footer = ({length}) => {

  return (
    <div className='footer'>
    <footer> {length} List {length === 1 ? "item" : "items" }</footer>
    </div>
    
  )
}

export default Footer