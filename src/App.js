
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
//(imrs)
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
   const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);


  
    const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#404040';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")



    }
    
  }

  return (
    <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />
  <div className="container my-3">
    {/* my-3-->gives margin in y for 3 units */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
  <About mode={mode}/>
  </div>
    </>
  );
}

export default App;
