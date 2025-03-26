import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/home")
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error =>{
        console.error("Erro ao conectar com a API", error);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">Dev II</header>
      <div className="animation-container">
        <img src="/logo.png" alt="Imagem animada" className="moving-image" />
      </div>
      <div class="content">
      <h1>React + Django</h1>
      <p>{message}</p>
    </div>
    </div>
  );
  

  const styles = {
    header: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      padding: "20px",
      backgroundColor: "#282c34",
      color: "white",
    },
  };

}

export default App;
