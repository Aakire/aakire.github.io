import style from './cartItem.module.css'

const CartItem = (props) =>{
    return(
        <div className={style.cartItem}>
              <img className={style.cartItemImg} src={props.img} alt='cart-img' />
              <h3 className={style.cartItemTittle}>{props.tittle}<br />
              <span className={style.cartItemPrice}>{props.price}</span></h3>
              <button className="closeBtn">X</button>              
            </div>
    )
}

export default CartItem;