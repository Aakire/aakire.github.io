import style from './header.module.css';
import Cart from '../cart/Cart'



const Header = (props) =>{
    return(
        <header>
            <h1 className={style.logo}>ROBO</h1>
            <nav>
                <a className={style.navItem} href=''>Наши контакты</a>
                <a className={style.navItem} href=''>Избранное</a>
                <a className={style.navItem} onClick={props.openCart}>Корзина</a>
            </nav>
        </header>
    )
}
export default Header