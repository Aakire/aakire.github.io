import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart'

function App() {
  return (
    <div className='app'>
      <Cart />
      

      <Header />        
      <Banner />
      
      <Products />  
      <Footer />   
    </div>
  
  );
}

export default App;
