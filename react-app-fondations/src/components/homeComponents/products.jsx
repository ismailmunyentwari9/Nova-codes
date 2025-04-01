import React,{ useState }  from 'react'

export default function Products(props) {
    const [product,setProduct]=useState(0);

    // ............handleShop........
    const handleShop=()=>{
        if(product==10){
            alert("10 is maximum product to shop..");
        }
        else{
            setProduct(product+1);
        }
    }
     // ............handleUnShop........
     const handleUnShop=()=>{
        if(product==0){
            alert("0 is minimum product to unshop......")
        }
        else{
            setProduct(product-1);
        }
    }
  return (
    <div className='mt-[50px] border-[2px] w-[50%] mx-auto '>
         <span>
            <i className='fa fa-shopping-cart text-black'></i>
            <i className='text-black'>{product}</i>
        </span>
      <img src={props.productImage} alt="" />
      <p>Product Name:{props.productName}</p>
      <p>Product Price:{props.productPrice}</p>
      <p>Prodct Quantity:{props.productQuantity}</p>
      <div className='div-btns flex justify-between'>
      <button onClick={handleShop} className='bg-red-400 text-white rounded'>Shop</button>
      <button onClick={handleUnShop} className='bg-red-400 text-white rounded'>Unshop</button>
      </div>
    </div>
  )
}
