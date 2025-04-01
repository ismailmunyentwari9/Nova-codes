import React from "react";
import productImage  from '../components/homeComponents/imgs/img1.jpg'
import Products from "../components/homeComponents/products";

 function Home (){
return (
    <div>
     
    <h1>Hello, I'm Home page........</h1>
    <Products productImage={productImage} productName="Laptops" productPrice="$100" productQuantity={100}/>
</div>
)
}
export default Home;