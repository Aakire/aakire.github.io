import React from 'react'
import style from './favorCard.module.css'
import { AppContext } from '../../../App';


const FavorCard = (props) =>{

  const context= React.useContext(AppContext);

  const onClickBtnCart =() =>{
    let id = props.id; 
    let vendorCode= props.vendorCode
    let tittle = props.tittle;
    let price= props.price;
    let img = props.img
    props.addItemToCart({id, vendorCode, tittle, price, img});

  }

  return(
    <div className={style.productItem}>
      <button className={style.favoriteBtn} onClick={()=>context.removeFromFavor(props.id)}>
        <img src='/img/onFavorite.svg' />
      </button>            
      <img className={style.productImg} src={props.img} />
      <div className={style.productInfo}>
        <p className={style.productTittle}>{props.tittle}</p>
        <p className={style.productDescription}>{props.description}</p> 
      </div>                       
      <div className={style.productPrice}> 
        <p className={style.price}>Цена <br />
          <span>{props.price + ' ₽'}</span>
        </p>
        <button className={context.isAddeddToCart ? style.onCart : style.offCart} onClick={onClickBtnCart}>
          <span className={style.cartBtnText}>{context.isAddeddToCart(props.vendorCode) ? 'В корзине' : 'В корзину'}</span>
          <img className={style.imgCart } src={context.isAddeddToCart(props.vendorCode) ? '/img/check-1.png' : '/img/cart-1.png'} alt='product img'></img>
        </button>
      </div> 
    </div>  
        
  ) 
}

export default FavorCard


