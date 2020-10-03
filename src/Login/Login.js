import React from 'react';
import './Login.css';

const login =(props)=>{
    return(
        <div className="container">
            <h1>Hello {props.firstName}{props.lastName}</h1>
            <form className="form">
                <input type="text" placeholder="First Name" name="firstName" onChange={props.onFNameChange} ></input>
                <input type="text" placeholder="Last Name" name="lastName" onChange={props.onLNameChange} ></input>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}
export default login;