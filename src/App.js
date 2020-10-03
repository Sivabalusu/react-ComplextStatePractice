import React, { useState } from 'react'; 
//import Login from './Login/Login';
import './App.css';


function App() {
  // const [fName,setFName]=useState("");
  // const [lName,setLName]=useState("");
  

  // function onFNameChange(event){
  //   const first=event.target.value;
  //   console.log(event.target.value);
  //   setFName(first);
  // }
  // function onLNameChange(event){
  //   const last=event.target.value;
  //   setLName(last);
  // }

  const [contact,setContact]=useState({
    fName:"",
    lName:"",
    email:""
  });

  const [isMousedOver,setMouseOver]=useState(false);

  function onHandleChange(event)
  {
    const {value,name}=event.target;
    setContact(preVale=>{
      if(name==="fName")
      {
        return{
          fName:value,
          lName:preVale.lName,
          email:preVale.email
        }
      }
      else if(name==="lName")
      {
        return{
          fName:preVale.fName,
          lName:value,
          email:preVale.email
        }
      }
      else if(name==="email")
      {
        return{
          fName:preVale.fName,
          lName:preVale.lName,
          email:value
        }
      }
    });
    
  }

  function mouseOverEvent(){
    setMouseOver(true);
  }
  function mouseOutEvent(){
    setMouseOver(false);
  }
  return (
    <div className="App">
      <div className="container">
            <h1>Hello {contact.fName} {contact.lName}</h1>
            <p>{contact.email}</p>
            <form className="form">
                <input type="text" placeholder="First Name" name="fName" value={contact.fName} onChange={onHandleChange} ></input>
                <input type="text" placeholder="Last Name" name="lName"  value={contact.lName} onChange={onHandleChange} ></input>
                <input type="text" placeholder="Email" name="email" value={contact.email} onChange={onHandleChange} ></input>
                <button 
                type="submit" 
                style={{backgroundColor:isMousedOver? "black":"white"}}
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                >Submit</button>
            </form>
        </div>
    </div>
  );
}

export default App;
