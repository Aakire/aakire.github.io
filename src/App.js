import './App.css';
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart'
import Home from './components/Home';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Favorites from './components/products/favorites/Favorites';
import Contacts from './components/Contacts/Contacts';

export   const AppContext = React.createContext({})

function App() {

  const [products, setProducts] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false); 
  const [cartItems, setCartItems] = React.useState([]);
  const [favorItems, setFavorItems] = React.useState([]);
  const [searchItems, setSearchItems] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {   
    
    async function axiosData() {      

    const CartData = await axios.get('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem');    
    const FavorData = await axios.get('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem');
    const ProductData = await axios.get('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/ProductItem');
    setLoading(false);
    setCartItems(CartData.data);
    setFavorItems(FavorData.data);
    setProducts(ProductData.data);
  }

  axiosData()

  }, [])

  const removeCartItem = (id) =>{
    axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem/${id}`) 
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
  }  

  const removeFromFavor = (id) =>{
    axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem/${id}`) 
    setFavorItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
}

const isAddeddToFavor = (vendorCode) => {
  return favorItems.some((objIsAdded) => objIsAdded.vendorCode === vendorCode )
}

const isAddeddToCart = (vendorCode) => {
  return cartItems.some((objIsAdded) => objIsAdded.vendorCode === vendorCode )
}

const addItemToCart = async (objCart) => {
  try{
    const findItem = cartItems.find((obj) => obj.vendorCode === objCart.vendorCode)

    if (findItem){
      axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem/${findItem.id}`) 
      setCartItems((prev) => prev.filter(item => item.vendorCode !== objCart.vendorCode))
    }else{
      const {data} = await axios.post('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/CartItem', objCart)  
      setCartItems([...cartItems, data])
    }
  }
  catch{
    alert("Не удалось добавить товар в корзину.")
  }  
}


const addItemToFavor = async (objFavor) => {
  try{
    const findItem = favorItems.find((obj) => obj.vendorCode === objFavor.vendorCode)

  if (findItem){
    axios.delete(`https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem/${findItem.id}`) 
    setFavorItems((prev) => prev.filter(item => item.vendorCode !== objFavor.vendorCode))
  }else{
    const {data} = await axios.post('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/FavoriteItem', objFavor)
    setFavorItems([...favorItems, data])
  } 
  }
  catch{
    alert("Не удалось добавить товар в избранное.")
  } 
}

  return (
    <AppContext.Provider value={{
      products, 
      favorItems, 
      cartItems,
      setCartItems,
      setFavorItems,
      setProducts,
      removeFromFavor,
      isAddeddToFavor,
      isAddeddToCart,
      loading,
      searchItems,
      setSearchItems,
      addItemToFavor,
      addItemToCart,
    }}>
        <div className='app'>
          {cartOpen ? <Cart 
          removeCartItem={removeCartItem}
          cartItems={cartItems} 
          closeCart={ () => setCartOpen(false) }
          totalPrice = {
            cartItems.reduce((totalItems, objPrice) => totalItems + Number(objPrice.price), 0)
          }
          /> : null
          }

        <Header openCart={ () => setCartOpen(true) } cartItems={cartItems}/> 
        <Routes>
          <Route path='/favorites' element={
            <Favorites />} 
          />
          <Route path='/' element={            
                <Home 
                  searchItems={searchItems}
                  setSearchItems={setSearchItems} 
                  loading={loading}
                />  
            }
          />
          <Route path='/contacts' element={
            <Contacts /> }
          />  
        </Routes>    
        <Footer />   
        </div>
    </AppContext.Provider>
  );
}

export default App;

/*fetch('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/ProductItem').then((respons)=>{
    return respons.json();
  }).then((productList)=>{
    setProducts(productList)
  });*/