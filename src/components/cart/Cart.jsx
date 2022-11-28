import CartItem from "./cartItem/CartItem";
import style from './cart.module.css'
import {Link} from 'react-router-dom';

const Cart = (props) =>{
    return(
        <div className={style.overlay}>
        <div className={style.cart}>

          <div className={style.tittleCart}>
            <h2>Корзина</h2>
            <button className='closeBtn' onClick={props.closeCart}>X</button>
          </div>

          <div className={style.cartList}>

            {
              props.cartItems.length == 0 
              ? 
                <div>
                  <h2>В вашу корзину ещё не добавлены товары.</h2>
                  
                  <button className={style.bannerBtn} onClick={props.closeCart}>Отправиться за покупками</button>
                  
                </div>
               : 
                props.cartItems.map( obj =>{
                  return(
                    <CartItem 
                      id={obj.id} 
                      vendorCode={obj.vendorCode}
                      tittle={obj.tittle}  
                      price={obj.price} 
                      img={obj.img} 
                      removeCartItem={props.removeCartItem}
                      />
                  )
                })
               
            }
          </div>
          <div className={style.totalPrice}>
            <h3 className={style.totalPriceText}>Сумма заказа:</h3>
            <h3 className={style.summText}>{props.totalPrice  + ' ₽'}</h3>
            <button >Заказать</button>
          </div>
        </div>
      </div>
    )
}

export default Cart;