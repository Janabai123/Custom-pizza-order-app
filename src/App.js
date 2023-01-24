import { useState,useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Customize from './Components/Customize';
import Checkout from './Components/Checkout';

function App() {
  const[ingredients,setIngredients]=useState({
    basil:false,
    cheese:false,
    mushroom:false,
    olive:false,
    pineapple:false,
    tomato:false
  });

useEffect(()=>{
  const data=localStorage.getItem('ingredients')
  if(data){
  setIngredients(JSON.parse(data))
  }
  console.log(data)
},[])

  return (
    
    <BrowserRouter >
    <div className="App">
    <Header />
   
           <Routes>
                 <Route exact path='/' element={< Customize ingredients={ingredients} setIngredients={setIngredients}/>}>
                  
                 </Route>
                 <Route exact path='/checkout' element={< Checkout ingredients= {ingredients}/>}></Route>
                 
          </Routes>
 </div>
    </BrowserRouter>
     


   
  );
}

export default App;
