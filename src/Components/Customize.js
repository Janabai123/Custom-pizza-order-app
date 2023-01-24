import React from 'react'
import '../App.css'
import PizzaBase from '../Images/PizzaBase.png'
import BaseCheese from '../Images/BaseCheese.png'
import Basil from '../Images/Basil.png'
import Mushroom from '../Images/Mushroom.png'
import Olive from '../Images/Olive.png'
import Pineapple from '../Images/Pineapple.png'
import Tomato from '../Images/Tomato.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Customize = ({ ingredients, setIngredients }) => {
    const navigate = useNavigate();

    const changeIngredients = (event, name) => {
        console.log(localStorage)

        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        //toggle ingredients
        newIngredients[name] = event;
        setIngredients(newIngredients)

        localStorage.setItem("ingredients", JSON.stringify(newIngredients))
    }


    return (
        <div className='container'>

            <div className='customize'>
                <div className='pizza-image'>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["basil"] ? 100 : -100,
                            opacity: ingredients["basil"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["olive"] ? 100 : -100,
                            opacity: ingredients["olive"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["pineapple"] ? 100 : -100,
                            opacity: ingredients["pineapple"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z3"
                    >
                        <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["tomato"] ? 100 : -100,
                            opacity: ingredients["tomato"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Tomato} alt="Tomato" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                            // y: ingredients["cheese"] ? 100 : -100,
                            // opacity: ingredients["cheese"] ? 1 : 0,
                            scale: ingredients["cheese"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="cheese z1"
                    >
                        <img src={BaseCheese} alt="Cheese" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["mushroom"] ? 100 : -100,
                            opacity: ingredients["mushroom"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div transition={{ duration: 1 }} className="">
                        <img src={PizzaBase} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>


                </div>




            </div>
            <div className='checkout'>
                <div className='input'>
               
                    <input type='checkbox' id='pineapple' checked={ingredients['pineapple']} name='pineapple' value='pineapple' onChange={(event) => changeIngredients(event.currentTarget.checked, 'pineapple')} />
                    
                    <label for='pineapple'>Pineapple</label>
                </div>
                <div className='input'>
                    <input type='checkbox' id='basil' name='basil' checked={ingredients['basil']} value='basil' onChange={(event) => changeIngredients(event.currentTarget.checked, 'basil')} />
                    <label for='basil'>Basil</label>
                </div>
                
                <div className='input'>
                    <input type='checkbox' id='olive' name='olive' checked={ingredients['olive']} value='olive' onChange={(event) => changeIngredients(event.currentTarget.checked, 'olive')} />
                    <label for='olive'>Olive</label>
                </div>
                <div className='input'>
                    <input type='checkbox' id='tomato' name='tomato' checked={ingredients['tomato']} value='tomato' onChange={(event) => changeIngredients(event.currentTarget.checked, 'tomato')} />
                    <label for='tomato'>Tomato</label>
                </div>
                <div className='input'>
                    <input type='checkbox' id='mushroom' name='mushroom' checked={ingredients['mushroom']} value='mushroom' onChange={(event) => changeIngredients(event.currentTarget.checked, 'mushroom')} />
                    <label for='mushroom'>Mushroom</label>
                </div>
                <div className='input'>
                    <input type='checkbox' id='cheese' name='cheese' checked={ingredients['cheese']} value='cheese' onChange={(event) => changeIngredients(event.currentTarget.checked, 'cheese')} />
                    <label for='cheese'>Cheese</label>
                </div>
                <button className='proceed-btn' onClick={() => navigate('./checkout')}>Proceed to Checkout</button>
            </div>

        </div>
    )
}

export default Customize