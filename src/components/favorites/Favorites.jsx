import React from "react";
import FavorCard from './favorCard/FavorCard';
import axios from 'axios';
import { AppContext } from "../../App";


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
                    <button className={style.bannerBtn}>Отправиться за покупками</button>
                </div>
              :
              <div className={style.products}> 
                    {
                        context.favorItems.map( obj =>{
                        return(
                            <FavorCard 
                            id={obj.id}
                            vendorCode={obj.vendorCode} 
                            tittle={obj.tittle} 
                            description={obj.description} 
                            price={obj.price} 
                            img={obj.img}
                            addItemToCart={
                                (cartObj) =>{
                                    addedToCart(cartObj);                                
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