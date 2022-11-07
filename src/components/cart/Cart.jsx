import CartItem from "./cartItem/CartItem";
import style from './cart.module.css'


const cart = [
  {
    id: 1,
    tittle: 'Лего-45678',
    price: '80 000 ₽',
    img: '/img/45678.jpg'
  },
  {
    id: 2,
    tittle: 'Лего-45544',
    price: '48 400 ₽',
    img: '/img/45544.jpg'
  },
  {
    id: 3,
    tittle: 'Лего-9641',
    price: '19 990 ₽',
    img: '/img/9641.jpg'
  },
  {
    id: 4,
    tittle: 'Лего-45345',
    price: '60 000 ₽',
    img: '/img/45345.jpg'
  },
  {
    id: 5,
    tittle: 'Лего-45560',
    price: '20 440 ₽',
    img: '/img/45560.jpg'
  }
]

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
              cart.map( obj =>{
                return(
                  <CartItem key={obj.key} tittle={obj.tittle}  price={obj.price} img={obj.img} />
                )
              })
            }           
            
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