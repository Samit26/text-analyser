
import { useState } from 'react';
import './App.css';
import Midlepage from './Midlepage';
import Navbar from './Navbar';
import Alert from './Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type) => {
       setAlert({ 
        msg:message , type:type

       });
    setTimeout(() =>{
       setAlert(null);

    },1500);

  }

  return (
    <>

    <Navbar />
    <Alert alert = {alert}/>
    <div className='container'>
    <Midlepage  showAlert={showAlert} />
    </div>

   
    </>
  );
}

export default App;
