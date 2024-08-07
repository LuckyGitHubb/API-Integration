import React, { useState } from 'react';

function ApiCalling2() {
    var [name, setMsgName] = useState('');
    var [job, setMsgJob] = useState('');
    var [arrData,setArrData] = useState('');
    function btn_SendDataClick(){
        getDataFromApi(name,job);
    }

    function onChange_Email(e){setMsgName(e.target.value)}
    function onChange_Password(e){setMsgJob(e.target.value)}

    async function getDataFromApi(name,job) {
        var data = {name:name,job:job}
        var url = 'https://reqres.in/api/users';
        var request = fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        })
        request.then((response)=>{
           var responseData = response.json();
           responseData.then((responseFromApi)=>
           {setArrData(responseFromApi)});
        },(failure)=>{
            console.log(failure);
        });


    }
    return (
        <div className='container'>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" value={name} onChange={onChange_Email} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input
                    type="text"
                    value={job}
                    onChange={onChange_Password}
                />
            </div>
            <div>
                <input onClick={btn_SendDataClick} type="button" value="Send Data" />
            </div>
            <div>
                
                {arrData.map((e)=>(<tr>
                    <td>{e.data.id}</td>
                    <td>{e.data.email}</td>
                    <td>{e.data.first_name}</td>
                    <td>{e.data.last_name}</td>
                    <td><img src={e.data.avatar}></img></td>
                    </tr>))}
            </div>
        </div>

    );
}
export default ApiCalling2;
