import Card from './card/Card'
import React from 'react'
import axios from 'axios';
import style from './products.module.css'
import { AppContext } from '../../App';



const Products = (props) =>{

  const context= React.useContext(AppContext);

  const renderCard = () =>{

    const filterList = context.products.filter((item) => item.tittle.toLowerCase().includes(context.searchItems.toLowerCase()))

      return(props.loading ? [...Array(6)] : filterList).map( (obj, index) =>
        {
          return(
            <Card 
              key={index}
              {...obj}

              isLoading={props.loading}
              addItemToCart={
                (cartObj) =>{
                  context.addItemToCart(cartObj);
                }                                      
              }
              addItemToFavor={
                  (favorObj) => {
                    context.addItemToFavor(favorObj);
                  }  
              } 
                              
            />
          )  
        })
  }


  
  const onSearchInput = (inputValue) => {    
    props.setSearchItems(inputValue.target.value)
  }

  return(
    <div className={style.productsSection}>       

        <div className={style.search}>
          <h2>{context.searchItems ? 'Поиск по запросу: ' +context.searchItems : 'Все товары'}</h2>
          <div className={style.searchBlock}>
            <img src='/img/search.png' alt='search' />
            <input onChange={onSearchInput} placeholder='Поиск по товарам' />
          </div>
        </div>        

        <div className={style.products}> 
          {
            renderCard()
          }
        </div>
    </div >
  )
}

export default Products
