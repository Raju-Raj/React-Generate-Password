import React, { useState } from 'react'
import { PasswordService } from '../services/PasswordService';

const PasswordGenerator = () => {


    let [state,setState]=useState({
        generatedPassword:'',
        passwordLength:20,
        symbol:false,
        number:false,
        lower:false,
        upper:false
        });

    
    let updateInput=(event)=>{
        setState({
            ...state,
            [event.target.name]:event.target.value
        })
    }

    let updateChecked=(event)=>{
        setState({
            ...state,
            [event.target.name]:event.target.checked
        })
    }

    const submitHandle=(event)=>{
        event.preventDefault();
       let passwordObj=PasswordService.getPasswordObj(state);
       let thePassword=PasswordService.generatePassword(passwordObj,state.passwordLength)
       console.log(thePassword)
       setState({...state,generatedPassword:thePassword})
    }




  return (
    <React.Fragment>
        
       <div className='container mt-5'>
           <div className='row'>
               <div className='col-md-4'>
                   <div className='card shadow-lg'>
                       <div className='card-header bg-warning p-3'>
                           <p className='h4'>Password Generator</p>
                       </div>
                       <div className='card-body bg-warning'>
                           <form onSubmit={submitHandle}>
                               <div className='mb-2'>
                                   <div className='input-group'>
                                       <span className='input-group-text'>Password</span>
                                       <input
                                       value={state.generatedPassword}
                                       onChange={updateInput}
                                       name="generatedPassword"
                                        type="text" className="form-control" placeholder="Generated Password"/>
                                       <span className="input-group-text"><i className="fa fa-clipboard"></i></span>
                                   </div>
                               </div>
                               <div className='mb-2'>
                                   <div className='input-group'>
                                       <input
                                       required
                                       value={state.passwordLength}
                                       onChange={updateInput}
                                       name="passwordLength"
                                       type="number" className="form-control" placeholder="Password length"/>
                                       <span className='input-group-text'>Password Length</span>
                                  </div>
                               </div>
                               <div className='mb-2'>
                                   <div className='input-group'>
                                       <span className='input-group-text bg-white'>
                                           <input
                                           onChange={updateChecked}
                                           name="symbol"
                                            type="checkbox" className='form-check-input'/>
                                       </span>
                                       <input type="text" disabled={true} placeholder="Symbols" className='form-control'/>
                                   </div>
                               </div>
                               <div className='mb-2'>
                                   <div className='input-group'>
                                       <span className='input-group-text bg-white'>
                                           <input
                                           onChange={updateChecked}
                                           name="number"
                                            type="checkbox" className='form-check-input'/>
                                       </span>
                                       <input type="text" disabled={true} placeholder="Numbers" className='form-control'/>
                                   </div>
                               </div>
                               <div className='mb-2'>
                                   <div className='input-group'>
                                       <span className='input-group-text bg-white'>
                                           <input
                                           onChange={updateChecked}
                                           name="lower"
                                            type="checkbox" className='form-check-input'/>
                                       </span>
                                       <input type="text" disabled={true} placeholder="Lowercase Letters" className='form-control'/>
                                   </div>
                               </div>
                               <div className='mb-2'>
                                   <div className='input-group'>
                                       <span className='input-group-text bg-white'>
                                           <input
                                           onChange={updateChecked}
                                           name="upper"
                                            type="checkbox" className='form-check-input'/>
                                       </span>
                                       <input type="text" disabled={true} placeholder="Uppercase Letters" className='form-control'/>
                                   </div>
                               </div>
                               <div className='mb-2 mt-2'>
                                   <input type="submit" value="Generate" className="btn btn-outline-dark"/>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </React.Fragment>
  )
}

export default PasswordGenerator