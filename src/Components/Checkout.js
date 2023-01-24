import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PizzaMan from '../Images/PizzaMan.png'
const Checkout = ({ingredients}) => {
    const[success,setSuccess]=useState(false);
    const navigate=useNavigate();

  return (
    <div className='checkout-container'>
      
        <div className='order'>
            <div>
                <h1>My Ingredient</h1>
                {Object.keys(ingredients).map((ingredient)=>{
                    return(
                    ingredients[ingredient]&&(
                        <p>{ingredient[0].toUpperCase()}{ingredient.substr(1)}</p>)
                    )
                })}
                <button  className='btn' onClick={()=>setSuccess(true)}>Confirm</button>
                <button className='btn' onClick={()=>navigate('/')}>Go Back</button>
            </div>
        </div>
        <div className='success'>
            {success &&(
                <div className='success-container'>
                    <img src={PizzaMan} alt='pizzaman' className='pizzaman-img'></img>
                    <div className='success-msg'>
                        <h1>We have received your order, Thank you</h1>
                        <h4>Order #{Math.round(Math.random() * 100000)}</h4>
                        <h4>Will be ready in 20-30 min</h4>
                    </div>
                </div>
                
            )}
        </div>
    </div>
  )
}

export default Checkout