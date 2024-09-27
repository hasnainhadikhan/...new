import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import Navbar from "./component/Navbar"
const products ={

}

function Products() {
  const [products , setProducts] = useState([]);
  const [loading , setLoading] = useState(true);

  ;
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products)
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error fetching =>' + err);
        setLoading(false);
      });
  }, []);
  
  return (
    <>
    <div className="container mx-auto  ">
     { loading ?(
    <h1 className="text-center text-8xl text-gray-100 ">Loading ...</h1>
      ) : (
     <div>
      <br/>
     <Navbar/><br/><br/><br/><br/>
     <div className="flex flex-wrap -m-4">
      {products.map((item)=>(
        <ProductCard item={item} key={item.id}/>
      )) }
  </div>
  </div>
  )}
   
      </div>
    </>
  );
}

export default Products;
