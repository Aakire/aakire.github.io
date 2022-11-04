const Card = (props) =>{
    return(
        <div className='product-item'>            
            <img className='product-img' src={props.img} />
            <div className='product-info'>
              <p className='product-tittle'>{props.tittle}</p>
              <p className='product-description'>{props.description}</p> 
            </div>                       
            <div className='product-price'> 
              <p className='price'>Цена <br />
                <span>{props.price}</span>
              </p>             
              <button className='add-cart'><span>В корзину</span>
               <img src='/img/cart.png' alt='product img'></img>
              </button>
            </div>
          </div>
    )
}

export default Card