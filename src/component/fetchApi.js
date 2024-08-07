import React, { useState,useEffect } from 'react';
 var counter = 0;
export function FetchApi(){
    const [productArray,setproductArray] = useState([]);
    var [count,setCount] = useState(0);
    async function apiCall(){
        counter++;
        console.log(counter);
        if(productArray.length==0){
        var url = 'https://dummyjson.com/products/categories'; 
        var response = await fetch(url,{method:'GET'});
        var data = await response.json();
        setproductArray(data);
        }
    }
    useEffect(()=>{
        apiCall();
        // console.log(productArray)
    },[count]);
    function btn_CountClick(){
        setCount(count+1);
    }
    // apiCall();
    if(productArray.length==0){
        return(<h1>Loading...</h1>);
    }
    else{
    return (
        <div>
            <div className="container">
                <label htmlFor="product">Product</label>
                <select>
                    {productArray.map((e,index)=>(<option key={index} value=''>{e}</option>))}
                </select>
            </div>
            <div>
            <input onClick={btn_CountClick} type="button" value={count}/>
            </div>
        </div>
    );
}
}

export default FetchApi;
