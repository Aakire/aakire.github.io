import style from './contacts.module.css';
import {Link} from 'react-router-dom';

const Contacts = () => {
    return(        
        <div className={style.contactsSection}>
            <h1 className={style.tittleissuePoints}> Адреса пунктов выдачи в России: </h1>
            <div className={style.issuePoints}>
                
                <div className={style.adress}>
                    <h2>Офис в Москве</h2>
                    <p> Набережная ул., д. 15 офис 18</p>
                    <h3>Телефон: </h3><p>+7 (945) 945-55-70</p>
                    <h3>График работы: </h3><p>Понедельник-Пятница 9:00 - 18:00</p>
                </div>
                <div className={style.adress}>
                    <h2>Офис в Новосибирске</h2>
                    <p> Лесная ул., д. 17</p>
                    <h3>Телефон: </h3><p>+7 (383) 730-19-83</p>
                    <h3>График работы: </h3><p>Понедельник-Пятница 9:00 - 18:00</p>
                </div>
                <div className={style.adress}>
                    <h2>Офис в Владивостоке</h2>
                    <p>  Заводская ул., д. 12 офис 5</p>
                    <h3>Телефон: </h3><p>+7 (923) 885-24-93</p>
                    <h3>График работы: </h3><p>Понедельник-Пятница 9:00 - 18:00</p>
                </div>
            </div>
            <h1>Наша команда:</h1>
            <div className={style.team}>
                <div className={style.employee}>
                    <img className={style.avatar} src='/img/avatar_m.png' />
                    <h2>Менеджер отдела продаж</h2>                    
                </div>
                <div className={style.employee}>
                    <img className={style.avatar} src='/img/avatar_f.png' />
                    <h2>Менеджер отдела поставок</h2>                    
                </div>
                <div className={style.employee}>
                    <img className={style.avatar} src='/img/avatar_m.png' />
                    <h2>Менеджер отдела продаж</h2>                    
                </div>
            </div>
            <Link to='/'>
                <button className={style.bannerBtn}>Отправиться за покупками</button>
            </Link>
        </div>
    )
}

export default Contacts