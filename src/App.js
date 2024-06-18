import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import AboutComponent from './components/About';


function App() {
  const [mode, setMode]=useState('light')
  const [alert, setAlert]=useState(null)

  const showAlert = (type,message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode = () =>{
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        showAlert('success', 'Enabled Dark Mode')
        document.title='TextUtils - Dark Mode'
        // setInterval(() => {
        //   document.title='TextUtils - Dark Mode'
        // }, 2000);
    }
    else {
        setMode('light')
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        showAlert('success', 'Enabled Light Mode')
        document.title='TextUtils - Light Mode'
        // setInterval(() => {
        //   document.title='TextUtils - Light Mode'
        // }, 1500);
    }
  }
  return (
    // <Router>
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextUtils showAlert={showAlert} heading="Enter the text to analyze below" />
      {/* <Routes>
      <Route path="/about" element={<AboutComponent />} />
      <Route path="/" element={<TextUtils showAlert={showAlert} heading="Enter the text to analyze below" />} />
        </Routes> */}
        </div>
    </div>
    // </Router>
  );
}

export default App;
