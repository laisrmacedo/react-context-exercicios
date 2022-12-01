import { Router } from "./router/router";
import {GlobalContext} from './context/GlobalContext'
import axios from 'axios'
import { useState } from "react";


function App() {
  const [usuarios, serUsuarios] = useState([])

  const header = {
    headers: {
      Authorization: "lais-macedo-ammal"
    }
  }

  const users = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", header)
    .then((response)=>{
      // console.log(response.data)
      serUsuarios(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  } 

  const context = {
    users,
    usuarios,
    header
  }

  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router></Router>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
