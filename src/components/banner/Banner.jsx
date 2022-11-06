import style from './banner.module.css'

const Banner = () => {
    return(
        <div className={style.bannerSection}>
            <div className={style.banner}>
            <p className={style.textBanner}>Робототехнические конструкторы <br />
            <span>для образования детей</span><br />
            <button className={style.bannerBtn}>Показать товары</button>
            </p>
            </div>
        </div>
    )
}

export default Banner