import React from 'react'
import style from './card.module.css'

const Card = (props) =>{

    const [addFavor, setFavor] = React.useState(true);
    const onClickPlus =() =>{
      setFavor(!addFavor)
    }
    
    const [addCart, setCart] = React.useState(true);
    const onClickCart =() =>{
      setCart(!addCart)
    }

    return(
        <div className={style.productItem}>
            <button className={style.favoriteBtn} onClick={onClickPlus}>
              <img src={addFavor ? '/img/offFavorite.svg' :'/img/onFavorite.svg'} />
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
              <button className={addCart ? style.onCart : style.offCart} onClick={onClickCart}>
                <span className={style.cartBtnText}>{addCart ? 'В корзину' : 'В корзине'}</span>
                <img className={style.imgCart } src={addCart ? '/img/cart-1.png' : '/img/check-1.png'} alt='product img'></img>
              </button>
            </div>
          </div>
    )
}

export default Card