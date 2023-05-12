import CategoryComponent from "./categoryComponetn";
import { useEffect, useState } from "react";

export default function Categroy(){

const [products,setProducts] = useState([]);

useEffect(()=>{
    const fetchData = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const jsonData = await response.json();
       setProducts(jsonData)
    }
    fetchData()
},[])

    return(
        <>
        {products.map((product)=>(
        <CategoryComponent key={product.id} product={product}/>

        ))}
        </>
    )
}