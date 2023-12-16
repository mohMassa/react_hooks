import React, {useMemo, useState} from 'react'

const Formulaire = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    // const processing_calling = processing(password)

    const processing_calling = useMemo(()=>{  processing (password) },  [password])
      
    
    
  return (
    <div className='row'>
      <div className='col-sm-3 mt-2 py-3 mx-auto bg-light'>
        <div className='mb-3'>
          <input type='text' id='name' value = {name} onChange={(event) =>{setName(event.target.value)} }  className='form-control' placeholder='name'></input>
        </div>
        <div>
          <input type='password' value={password} onChange={(event)=>{setPassword(event.target.value)}} className='form-control' placeholder='password'></input>
        </div>

      </div>
    </div>
  )
}

const processing = (password) => {

    if (password.length != 0) {
        console.log(password)
        
    }
    
   

}

export default Formulaire