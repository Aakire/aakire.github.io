import React from "react";
import Card from '../card/Card'
import axios from 'axios';
import { AppContext } from "../../../App";
import {Link} from 'react-router-dom';


import style from './favorites.module.css'

const Favorites = (props) => {

    const context= React.useContext(AppContext);
    
    const addedToCart = (objCart) => {
        axios.post('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem', objCart)  
        context.setCartItems([...context.cartItems, objCart])  
    }
    
    return(
        
        <div className={style.productsSection}>            
            <h1 className={style.favorTittle}>Избранные товары</h1>            
            {
              context.favorItems.length == 0 
              ? <div>
                    <h2 className={style.message}>Здесь ещё не добавлены товары.</h2>
                    <Link to='/'>
                        <button className={style.bannerBtn}>Отправиться за покупками</button>
                    </Link>
                </div>
              :
              <div className={style.products}> 
                    {
                        context.favorItems.map( obj =>{
                        return(
                            <Card 

                                {...obj}

                                addItemToCart={
                                    (cartObj) =>{
                                        context.addItemToCart(cartObj);
                                    }                                      
                                }
                                addItemToFavor={
                                    (favorObj) => {
                                        context.addItemToFavor(favorObj);
                                    }  
                                } 
                                                
                            />
                        )
                        })
                    }
                </div>
            }    
        </div >
    )
}


export default Favorites