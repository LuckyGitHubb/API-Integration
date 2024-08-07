import React, {  useState } from 'react';

function ApiCalling(props) {
    var [arr, setArr] = useState([]);
    async function callingApi() {
        var url = 'https://reqres.in/api/users/2';
        var data = await fetch(url, { method: 'GET' });
        var response = await data.json();
        var res = response;
        setArr(res);
    }
    function btn_Click() {
            callingApi();
    }
    return (
        <div>
            <div> 
                {Object.keys(arr.data).map((key)=>{
                    <h3>{key.data}</h3>
                })}
            </div>
            <div>
                <input onClick={btn_Click} type="button" value="Click" />
            </div>
        </div>
    );
}

export default ApiCalling;


