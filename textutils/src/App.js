import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const[mode, setMode]= useState(`light`);// whether dark mode enable or not
  const[alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{ 
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=> {
      setAlert(null)
    }, 1800);
  }
  const toggleMode= ()=>{
   if(mode=== 'light'){
    setMode('dark')
    document.body.style.backgroundColor ='grey';
    showAlert("Dark mode has been enabled", "success");
    document.title ="TextUtils - Dark Mode";
    // setInterval(()=>{
    //   document.title ='TextUtils is Amazing ';
    // }, 2000);
    // setInterval(()=>{
    //   document.title ='Install TextUtills Now';
    // },1500);
   }
else{
  setMode('light')
  document.body.style.backgroundColor ='white';
  showAlert("Light mode has been enabled", "success");
  document.title ="textUtils - Light Mode";
}
}
return (
    <>
    {/* <Router> */}
    {/* <Navbar title ="TextUtils" aboutText="About Us"/> */}
    {/* <Navbar/> */}
    
    <Navbar title ="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>  
      <div className="container my-3">
        {/* <Routes>    */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} headings="Enter the text to analyze below" mode={mode}/>} /> */}
          <TextForm showAlert={showAlert} headings="Enter the text to analyze below" mode={mode}/>
        {/* </Routes> */}
      </div>
   {/* </Router> */}
    </>
  );
}

export default App;
