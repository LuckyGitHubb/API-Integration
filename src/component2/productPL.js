import React, { useState } from 'react';
import { showData } from './productBL';
function ProductPL(props) {
    var [productArr, setProductArr] = useState([]);
    function btn_ClickToShowAllData() {
        setProductArr(showData());
    }
    return (
        <div>
            <div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productArr.map((e, index) => (<tr key={index}>
                  <td>{e.id}</td>
                  <td>{e.product_name}</td>
                  <td>{e.price}</td>
                  <td><img src={e.images}></img></td>
               </tr>))}
                    </tbody>
                </table>
            </div>
            <div>
                <input type="button" value="Click me" onClick={btn_ClickToShowAllData} />
            </div>
        </div>

    );
}

export default ProductPL;
