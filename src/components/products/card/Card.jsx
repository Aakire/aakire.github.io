import React from 'react'
import style from './card.module.css'
import ContentLoader from 'react-content-loader';

const Card = (props) =>{

    const [addFavor, setFavor] = React.useState(props.isAddeddToFavor);    

    const onClickHearth =() =>{
      let id = props.id;
      let vendorCode= props.vendorCode 
      let tittle = props.tittle;
      let price= props.price;
      let img = props.img
      props.addItemToFavor({id,vendorCode, tittle, price, img});
      setFavor(!addFavor)
    }
    
    const [addCart, setCart] = React.useState(props.isAddedToCart);

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
     
            {
              props.isLoading ?
              <div className={style.preloadBlock}>
                <ContentLoader 
                speed={2}
                width={320}
                height={415}
                viewBox="0 0 320 415"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
              >
                <rect x="15" y="20" rx="0" ry="0" width="290" height="190" /> 
                <rect x="0" y="285" rx="0" ry="0" width="320" height="50" /> 
                <rect x="0" y="240" rx="0" ry="0" width="156" height="30" /> 
                <rect x="0" y="355" rx="0" ry="0" width="135" height="45" /> 
                <rect x="195" y="365" rx="0" ry="0" width="125" height="35" />
                </ContentLoader> 
              </div>
              :
              <>
                <button className={style.favoriteBtn} onClick={onClickHearth}>
                  <img src={addFavor ? '/img/onFavorite.svg' :'/img/offFavorite.svg'} />
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
              </>
            }
            
        
      </div>  
          
    )
}

export default Card

/*
        props.isLoading ?
            <div className={style.preloadBlock}>
              <ContentLoader 
              speed={2}
              width={320}
              height={415}
              viewBox="0 0 320 415"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              {...props}
            >
              <rect x="15" y="20" rx="0" ry="0" width="290" height="190" /> 
              <rect x="0" y="285" rx="0" ry="0" width="320" height="50" /> 
              <rect x="0" y="240" rx="0" ry="0" width="156" height="30" /> 
              <rect x="0" y="355" rx="0" ry="0" width="135" height="45" /> 
              <rect x="195" y="365" rx="0" ry="0" width="125" height="35" />
              </ContentLoader> 
            </div>
            :
            <>
              <button className={style.favoriteBtn} onClick={onClickHearth}>
                <img src={addFavor ? '/img/onFavorite.svg' :'/img/offFavorite.svg'} />
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
            </>
       */ 