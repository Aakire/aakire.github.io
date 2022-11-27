import Banner from "./banner/Banner"
import Products from "./products/Products"

const Home = (props) => {
    return (
        <>
            <Banner />      
            <Products
                searchItems={props.searchItems}
                setSearchItems={props.setSearchItems} 
                loading={props.loading}
            />
        </> 
    )
}

export default Home