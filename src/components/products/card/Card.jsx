import style from './card.module.css'

const Card = (props) =>{
    return(
        <div className={style.productItem}>
            <button className={style.favoriteBtn}>
              <img src='/img/heart-1.png' />
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
              <button className={style.addCart}><span>В корзину</span>
               <img src='/img/cart.png' alt='product img'></img>
              </button>
            </div>
          </div>
    )
}

export default Card