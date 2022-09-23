import React from 'react';
import './form.css';
import { useState } from 'react';

function Form() {
    const [pass, setPass] = useState('');
    const actualizarPassword = (e) => setPass(e.target.value)
    let textoSecreto = 'no' 
    if (pass === '252525'){
        textoSecreto = 'si'
    }
    return (
        <>
        <label>Nombre</label>
<input type="text" placeholder='Nombre'/>
<br></br>
<label>Contraseña</label>
<input 
type="password" 
placeholder='Escriba su password' 
onChange={actualizarPassword}/>
<br></br>
<button className={textoSecreto}>Ingresar</button>
<h1 className='no'>{pass}</h1>
    </>
  )
}

export default Form