import React, {useReducer} from 'react'

function reducer (state, action){
    
    switch(action.type){

        case 'add' : {
           
            return {
                value_1 :state.value_1,
                value_2 :state.value_2,
                response_value : state.value_1 + state.value_2,
        
            }
        }
        case 'sub': {
            return {
                value_1 :state.value_1,
                value_2 :state.value_2,
                response_value : state.value_1 - state.value_2
        
            }

        }
        case 'edit': {
            if (action.Key === 0) {
                return{
                    
                    value_1 : Number( action.new_value),
                    value_2:state.value_2
                 }
                
            }
        
            else {
                return{
                    value_1:state.value_1,
                    value_2 : Number( action.new_value)
                 }

            }
            
        }
        case 'mult':{
            return {
                value_1 :state.value_1,
                value_2 :state.value_2,
                response_value : state.value_1 * state.value_2
            }
        }
    }

}

const initialSate = {value_1 : 10, value_2 : 10}

const Use_reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialSate)

    function add (e) {
    
        dispatch({
            type :'add'
        })
        
    }
    function sub (){
        dispatch({type:'sub'})

    }

    function mult (){
        dispatch({type:'mult'})

    }

    function edit (e){

        dispatch({
            type : 'edit', 
            new_value : e.target.value,
            Key:0
    
    })
    }
    function edit_1 (e){

        dispatch({
            type : 'edit', 
            new_value : e.target.value,
            Key : 1
    
    })
    }
  return (
    <div className='row'>
    <div className='col-sm-3 mt-2 py-3 mx-auto bg-light'>
      <div className='mb-3'>
        <input type='number' value={state.value_1} onChange={edit}   className='form-control text-start' placeholder='value_1'></input>
      </div>
      <div>
        <input type='number' value={state.value_2} className='form-control text-start ' onChange={edit_1} placeholder='value_2'></input>
      </div>
      <div>
        <input type='btn btn-sm' value={state.response_value} className='form-control text-end' readOnly placeholder='response'></input>
      </div>
      <div className='row mt-3'>
        <button className='col-sm-1 btn btn-outline-primary mx-auto text-center' onClick={add}>+</button>
        <button className='col-sm-1 btn btn-outline-primary mx-auto text-center' onClick={sub}>-</button>
        <button className='col-sm-1 btn btn-outline-primary mx-auto text-center'onClick={mult} >*</button>
    
      </div>

    </div>
  </div>
    
  )
}

export default Use_reducer