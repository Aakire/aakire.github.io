import style from './header.module.css';
import {Link} from 'react-router-dom';
 


const Header = (props) =>{
    return(
        <header>
            <Link to='/'>
                <h1 className={style.logo}>ROBO</h1>
            </Link>            
            <nav>
                <Link to='/contacts'>
                    <button className={style.navItem}>Наши контакты</button>
                </Link>
                <Link to='/favorites'>
                    <button className={style.navItem}>Избранное</button>
                </Link>
                <div>
                    <button className={style.navItem} onClick={props.openCart}>
                        Корзина <div className={style.countCartItems}>{props.cartItems.length}</div>
                    </button>                    
                </div>  
            </nav>
        </header>
    )
}
export default Header