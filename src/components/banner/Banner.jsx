import style from './banner.module.css'
import React from "react"
import Slider from "react-slick"

const Banner = () => {

    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };

    return(
        
        <div className={style.bannerSection}>
            <Slider {...settings}>

            <div className={style.banner}>
                <p className={style.textBanner}>Робототехнические конструкторы <br />
                <span>для образования детей</span><br />
                <button className={style.bannerBtn}>Показать товары</button>
                </p>
            </div>
            <div className={style.textSection}>
                <h2>Робототехника на основе Lego</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate natus provident iusto, fugit architecto unde optio at impedit, numquam non et neque odio, voluptas amet? Ut doloremque sit, delectus explicabo laborum dolorem. Non excepturi accusamus nisi atque illo cum vel iste sapiente itaque repudiandae aliquam quod officia quasi, facilis obcaecati asperiores perferendis voluptatum consequatur explicabo incidunt nobis iure corporis eligendi! <br /> Nam quae sed est perferendis in recusandae, sunt tempore odio error officiis quisquam animi libero explicabo aperiam dicta cum. Non, voluptatibus exercitationem perferendis quo laboriosam quam aut saepe sapiente ratione dignissimos ipsa ex molestias suscipit obcaecati nihil quis dolorum repellendus repellat quos numquam dolor quibusdam. Totam ratione, assumenda facilis quae adipisci possimus voluptates laborum sit fugit culpa illum laudantium perferendis eius incidunt nihil distinctio architecto non eos deleniti itaque expedita rerum ullam quaerat ipsam. Quas qui architecto magni repellendus cupiditate perferendis tenetur aperiam fuga voluptate nemo molestias, tempora corrupti itaque ipsum ipsam nobis laudantium obcaecati recusandae.  </p>
                
            </div>
            </Slider>
        </div>
        
    )
}

export default Banner