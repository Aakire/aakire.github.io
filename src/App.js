import './App.css';
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart'
import Home from './components/Home';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Favorites from './components/favorites/Favorites';

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

  return (
    <div className='app'>
      {cartOpen ? <Cart 
      removeCartItem={removeCartItem}
      cartItems={cartItems} 
      closeCart={ () => setCartOpen(false) }/> : null
      }

      <Header openCart={ () => setCartOpen(true) } cartItems={cartItems}/> 
      <Routes>
        <Route path='/favorites' element={
          <Favorites 
            items={products} 
            cartItems={cartItems} 
            setCartItems={setCartItems}
            favorItems={favorItems}
            setFavorItems={setFavorItems}
            removeFromFavor={removeFromFavor}
          />} 
        />
        <Route path='/' element={            
              <Home 
                items={products} 
                cartItems={cartItems} 
                setCartItems={setCartItems}
                searchItems={searchItems}
                setSearchItems={setSearchItems} 
                favorItems={favorItems}
                setFavorItems={setFavorItems}
                loading={loading}
              />  
          }
        />
      </Routes>    
      <Footer />   
    </div>  
  );
}

export default App;

/*fetch('https://636fcdfcf2ed5cb047e5d7ce.mockapi.io/ProductItem').then((respons)=>{
    return respons.json();
  }).then((productList)=>{
    setProducts(productList)
  });*/