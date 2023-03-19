import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import Textarea from './components/Textarea';
//react router dom
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,changeMode]=useState('light');
  const [colour,setColor]=useState('#212529');
  const [alert,setAlert]=useState(null);
  const displayAlert=(message,type)=>{
    setAlert({
      msg :message,
      type :type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const colorChanger=(selectedColor)=>
  {
    setColor(selectedColor);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {changeMode('dark');
    
     document.body.style.backgroundColor=colour;
     document.body.style.color='white';
     displayAlert("dark mode enabled","success");

    //  document.title="TextUtils-Dark";
     }
    else
    {changeMode('light');
     document.body.style.backgroundColor='white';
     document.body.style.color='#212529';
     displayAlert("light mode enabled","success");

    //  document.title="TextUtils-light";
    }
    
    // setInterval(() => {
    //   document.title='install now';
    // }, 1000);

    // setInterval(() => {
    //   document.title='install it';
    // }, 1500);
  }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar/> */}
    <Navbar title="textUtils" mode={mode} colorChanger={colorChanger} toggleMode={toggleMode} /> 
      <Alert alert={alert}/>
      {/* <Routes> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
{/*         
          <Route exact path="/about" element= {<About />}/>
          <Route exact path="/" element={<Textarea mode={mode} showAlert={displayAlert}/>}/> */}
      {/* <Textarea heading="Text to convert"></Textarea> */}
      <Textarea mode={mode} showAlert={displayAlert}/>
      {/* <About/> */}
      {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
