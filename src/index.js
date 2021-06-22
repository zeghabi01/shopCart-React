import React, { useState,useEffect } from 'react'
import ReactDom from 'react-dom'

// import components
import NavBar from './component/NavBar'
import Cart from './component/Cart'


import "./index.css"


function  ShopCart() {


  const [number,setNumber] = useState(0)

  const handleChange = (cartStock) => {
    setNumber(cartStock)
  }

  return (
    <>
    <div className="container">
        <NavBar allAmount={number} />
        <Cart handleChange={handleChange} />
    </div>
    </>
  )

}

ReactDom.render(<ShopCart /> ,document.getElementById('root'))