import Banner from "./banner/Banner"
import Products from "./products/Products"

const Home = (props) => {
    return (
        <>
        <Banner />      
        <Products 
            items={props.items} 
            cartItems={props.cartItems} 
            setCartItems={props.setCartItems}
            searchItems={props.searchItems}
            setSearchItems={props.setSearchItems} 
            favorItems={props.favorItems}
            setFavorItems={props.setFavorItems}
            loading={props.loading}
        />
        </> 
    )
}

export default Home