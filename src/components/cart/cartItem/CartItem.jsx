import style from './cartItem.module.css'

const CartItem = (props) =>{
    return(
        <div className={style.cartItem}>
              <img className={style.cartItemImg} src={props.img} alt='cart-img' />
              <h3 className={style.cartItemTittle}>{props.tittle}</h3>
              <h3 className={style.cartItemPrice}>{props.price + ' ₽'}</h3>
              <button onClick={()=> props.removeCartItem(props.id)} className="closeBtn">X</button>              
         </div>
    )
}

export default CartItem;