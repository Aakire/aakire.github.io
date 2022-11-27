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
                  addedToCart(cartObj);
                }                                      
              }
              addItemToFavor={
                  (favorObj) => {
                    addedToFavor(favorObj);
                  }  
              }                 
            />
          )  
        })
  }

  const addedToCart = async (objCart) => {
    try{
      const findItem = context.cartItems.find((obj) => obj.vendorCode === objCart.vendorCode)

      if (findItem){
        axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem/${findItem.id}`) 
        context.setFavorItems((prev) => prev.filter(item => item.vendorCode !== objCart.vendorCode))
      }else{
        const {data} = await axios.post('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem', objCart)  
        context.setCartItems([...context.cartItems, data])
      }
    }
    catch{
      alert("Не удалось добавить товар в корзину.")
    }  
  }

  const addedToFavor = async (objFavor) => {
    try{
      const findItem = context.favorItems.find((obj) => obj.vendorCode === objFavor.vendorCode)

    if (findItem){
      axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem/${findItem.id}`) 
      context.setFavorItems((prev) => prev.filter(item => item.vendorCode !== objFavor.vendorCode))
    }else{
      const {data} = await axios.post('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem', objFavor)
      context.setFavorItems([...context.favorItems, data])
    } 
    }
    catch{
      alert("Не удалось добавить товар в избранное.")
    } 
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
