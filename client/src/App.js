
import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios"; 

function App() {

  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [passwordList, setPasswordList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/showpasswords").then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const addPassword = () => {
    Axios.post("http://localhost:3001/addpassword", {
      password: password, url: url
    });
  };

  const decryptPassword = (encryption) => {
    Axios.post("http://localhost:3001/", {
      password: encryption.password, iv: encryption.iv 
    });
  }

  return (<div className="App">
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
      <button onClick={addPassword}> Add Password </button>
    </div>

    <div className="Passwords">
        {passwordList.map((val) => {
          return (<div className="password"> 
                   <h3>{val.url}</h3>
                  </div>
          );
        })}
    </div>
  </div>
  );
}

export default App;
