import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart'
import React from 'react';

function App() {

  const [cartOpen, setCartOpen] = React.useState(false);  

  return (
    <div className='app'>
      {cartOpen ? <Cart closeCart={ () => setCartOpen(false) }/> : null}
      

      <Header openCart={ () => setCartOpen(true) } />        
      <Banner />
      
      <Products />  
      <Footer />   
    </div>  
  );
}

export default App;
