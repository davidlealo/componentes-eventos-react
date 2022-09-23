import React from 'react'

function Password() {
  return (
    <div>
    <label >Contraseña</label>
    <br></br>
    <input type="password" name="password" id="password" placeholder='Escriba su contraseña'
    onChange={(e) =>{
        let clave = e.target.value
        console.log(clave)
        
            if (clave === '252525'){
                console.log('ingresar')
            } 
        
        
    }}/>
    </div>
    
  )
}

export default Password