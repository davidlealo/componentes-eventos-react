import './App.css'
import Form from './components/Form';
import {useState} from 'react';

function App() {
  const [pass, setPass] = useState('si')
  
  
  return (
    <div className='box'>
      <Form></Form>
    </div>
  )
}

export default App
