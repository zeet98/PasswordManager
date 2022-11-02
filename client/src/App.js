
import './App.css';
import { useState } from "react";

function App() {

  const [password, setPassword] = useState('')
  const [url, setUrl] = useState('')

  return <div className="App">
    <div className="AddingPassword">
      <input 
        type="text"
        placeholder="Ex. password 123" 
        onChange={(event)=>{
          setPassword(event.target.value);
        }}
      />
      <input 
        type="text" 
        placeholder="Ex. Facebook" 
        onChange={(event)=>{
          setUrl(event.target.value);
        }}
        />
      <button> Add Password </button>
    </div>
  </div>;
}

export default App;
