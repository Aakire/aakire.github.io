import React from 'react'
import style from './favorCard.module.css'

const FavorCard = (props) =>{


    
    const [addCart, setCart] = React.useState(false);

    const onClickBtnCart =() =>{
      let id = props.id; 
      let vendorCode= props.vendorCode
      let tittle = props.tittle;
      let price= props.price;
      let img = props.img
      props.addItemToCart({id, vendorCode, tittle, price, img});
      setCart(!addCart)
    }

    return(
        <div className={style.productItem}>
            <button className={style.favoriteBtn} onClick={()=>props.removeFromFavor(props.id)}>
              <img src='/img/onFavorite.svg' />
            </button>            
            <img className={style.productImg} src={props.img} />
            <div className={style.productInfo}>
              <p className={style.productTittle}>{props.tittle}</p>
              <p className={style.productDescription}>{props.description}</p> 
            </div>                       
            <div className={style.productPrice}> 
              <p className={style.price}>Цена <br />
                <span>{props.price}</span>
              </p>
              <button className={addCart ? style.onCart : style.offCart} onClick={onClickBtnCart}>
                <span className={style.cartBtnText}>{addCart ? 'В корзине' : 'В корзину'}</span>
                <img className={style.imgCart } src={addCart ? '/img/check-1.png' : '/img/cart-1.png'} alt='product img'></img>
              </button>
            </div>
          </div>
    )
}

export default FavorCard