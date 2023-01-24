import React from 'react'
import '../App.css'
import Pizzalogo from '../Images/Pizzalogo.png'
const Header = () => {
  return (
    <div className='header'>
    <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Pizzalogo} alt="pizzalogo" height="30px" />
       
        </div>
        <div className='header-container'>Pizza Customization</div>
    </div>
  )
}

export default Header