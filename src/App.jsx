import { useState } from 'react'
import './App.css'
import User from './components/User'
import Password from './components/Password'
import Button from './components/Button'
//import {useState} from 'react'

function App() {
  /*const [pass, setPass] = useState('252525')
  function () =>{
    if (Password.target.value === pass){

    }
  }*/

  return (
    <div className='box'>
      <User></User>
      <br></br>
      <Password></Password>
      <br></br>
      <Button text="Ingresar"></Button>
    </div>
  )
}

export default App
