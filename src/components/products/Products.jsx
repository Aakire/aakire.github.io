import Card from './card/Card'
import style from './products.module.css'

const Products = () =>{
  return(
    <div className={style.productsSection}>       

        <div className={style.search}>
          <h2>Все смартфоны</h2>
          <div className={style.searchBlock}>
            <img src='/img/search.png' alt='search' />
            <input placeholder='Поиск по товарам' />
          </div>
        </div>

        <div className={style.products}>
          <Card tittle='Лего-45678' description='Базовый набор LEGO Education SPIKE Prime Лего-45678.' price='80 000 ₽' img='/img/45678.jpg' />
          <Card tittle='Лего-45544' description='Базовый набор Mindstorms Education EV3 LEGO 45544.' price='48 400 ₽' img='/img/45544.jpg' />
          <Card tittle='Лего-9641' description='Набор LEGO 9641 Пневматика.' price='19 990 ₽' img='/img/9641.jpg' />
          <Card tittle='Лего-45345' description='45345 Базовый набор LEGO Education SPIKE Старт.' price='60 000 ₽' img='/img/45345.jpg' />
          <Card tittle='Лего-45560' description='Ресурсный набор Mindstorms Education EV3 LEGO 45560.' price='20 440 ₽' img='/img/45560.jpg' />
          <Card tittle='Лего-45680' description='Короткое описание продуктаРесурсный набор LEGO Education SPIKE Prime Лего-45680.' price='29 990 ₽' img='/img/45680.jpg' />
          
        </div>
    </div >
  )
}

export default Products