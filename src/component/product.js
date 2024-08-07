import React, { useState } from 'react';
export function Product() {
    var [prodArr, setProdArr] = useState([]);
    async function callingTheApi() {
        var url = 'https://dummyjson.com/products';
        var req = await fetch(url, { method: 'GET' })
        var res = await req.json();
        setProdArr(res.products);
    }
    function btn_RecieveDataClick() {
        callingTheApi();
    }
    return (
        <div>
            <div className='container'>
                <table class="table table-striped">
                    <thead>
                        <tr className='my-5'>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prodArr.map((e, index) => (<tr className='my-5' key={index}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.price}</td>
                            <td>{e.category}</td>
                            <td><img width="250px" height="200px" src={e.thumbnail} /></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-center d-flex align-items-center'>
                <input onClick={btn_RecieveDataClick} type="button" value="Send Data" />
            </div>
        </div>
    );
}
export default Product;

