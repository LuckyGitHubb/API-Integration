import React, { useState } from 'react';

function apiCalling(name,job){
    var url = 'https://reqres.in/api/users';
    var data = {name:name,
    job:job}
    var p = fetch(url,{method:'POST',body:JSON.stringify(data)});
    p.then((response)=>{
        var d = response.json();
        d.then((responseData)=>{
            console.log(responseData);
            alert('Successfully Submited');
        });
    },(failed)=>{
        console.log(failed);
    });
}

export function AddCustomer(){
    const [name,setName] = useState('');
    const [job,setJob] = useState('');

    function btn_AddClick(){
        apiCalling(name,job);
    }

    function onChangeName(e){setName(e.target.value)}
    function onChangeJob(e){setJob(e.target.value)}
    return (
        <div>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={onChangeName} value={name}/>
            </div>
            <div>
            <label htmlFor="name">Job</label>
            <input type="text" onChange={onChangeJob} value={job}/>
            </div>
            <div>
                <input onClick={btn_AddClick} type="button" value="add"/>
            </div>
        </div>
    );
}

export default AddCustomer;
