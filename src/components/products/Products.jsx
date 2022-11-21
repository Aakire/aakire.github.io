import Card from './card/Card'
import axios from 'axios';
import style from './products.module.css'



const Products = (props) =>{

  const renderCard = () =>{

    const filterList = props.items.filter((item) => item.tittle.toLowerCase().includes(props.searchItems.toLowerCase()))

      return(props.loading ? [...Array(6)] : filterList).map( (obj, index) =>
        {
                return(
                  <Card 
                    key={index}
                    {...obj}

                    isLoading={props.loading}
                    isAddeddToFavor={props.favorItems.some((objIsAdded) => objIsAdded.vendorCode === obj.vendorCode )}
                    isAddedToCart={props.cartItems.some((objIsAdded) => objIsAdded.vendorCode === obj.vendorCode )}
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
      const findItem = props.cartItems.find((obj) => obj.vendorCode === objCart.vendorCode)

      if (findItem){
        axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem/${findItem.id}`) 
        props.setFavorItems((prev) => prev.filter(item => item.vendorCode !== objCart.vendorCode))
      }else{
        const {data} = await axios.post('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem', objCart)  
        props.setCartItems([...props.cartItems, data])
      }
    }
    catch{
      alert("Не удалось добавить товар в корзину.")
    }  
  }

  const addedToFavor = async (objFavor) => {
    try{
      const findItem = props.favorItems.find((obj) => obj.vendorCode === objFavor.vendorCode)

    if (findItem){
      axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem/${findItem.id}`) 
      props.setFavorItems((prev) => prev.filter(item => item.vendorCode !== objFavor.vendorCode))
    }else{
      const {data} = await axios.post('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem', objFavor)
      props.setFavorItems([...props.favorItems, data])
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
          <h2>{props.searchItems ? 'Поиск по запросу: ' +props.searchItems : 'Все смартфоны'}</h2>
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
