import style from './header.module.css';

const Header = () =>{
    return(
        <header>
            <h1 className={style.logo}>ROBO</h1>
            <nav>
                <a className={style.navItem} href=''>Наши контакты</a>
                <a className={style.navItem} href=''>Избранное</a>
                <a className={style.navItem} href=''>Корзина</a>
            </nav>
        </header>
    )
}
export default Header