import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulaire from './components/Formulaire';
import Use_reducer from './components/Use_reducer';

function App() {

  // const [name, setName]= useState('Mohamed')
  // const [password, setPassword]= useState('')
  //  const treat = () => {
  //   setName(name)
  //   console.log(name)
  //  }

  return (
    <div>
      {/* <Formulaire></Formulaire> */}
      <Use_reducer></Use_reducer>

    </div>
    
  );
}

export default App;
