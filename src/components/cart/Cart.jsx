import CartItem from "./cartItem/CartItem";
import style from './cart.module.css'

const Cart = () =>{
    return(
        <div className={style.overlay}>
        <div className={style.cart}>

          <div className={style.tittleCart}>
            <h2>Корзина</h2>
            <button className='closeBtn'>X</button>
          </div>

          <div className={style.cartList}>
            <CartItem tittle='Название товара' price='5000 руб' img='/img/45544.jpg' />
            <CartItem tittle='Название товара' price='5000 руб' img='/img/45544.jpg' />
            <CartItem tittle='Название товара' price='5000 руб' img='/img/45544.jpg' />
            <CartItem tittle='Название товара' price='5000 руб' img='/img/45544.jpg' />
            <CartItem tittle='Название товара' price='5000 руб' img='/img/45544.jpg' />
            
          </div>
          <div className={style.totalPrice}>
            <h3 className={style.totalPriceText}>Сумма заказа:</h3>
            <h3 className={style.summText}>5000 p</h3>
            <button >Заказать</button>
          </div>
        </div>
      </div>
    )
}

export default Cart;