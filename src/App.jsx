import { useState } from 'react'

import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import Leftbar from "./components/leftbar/Leftbar.jsx";
import Update from "./components/update/Update.jsx";
import Rightbar from "./components/rightbar/Rightbar.jsx";

function App() {
    const [name,setName] = useState("Sourov")
  return (
   <>
       <Navbar name={name}/>
       <div className="container">
           <Leftbar />
           <Update/>
           <Rightbar/>
       </div>
   </>
  )
}

export default App
