import './App.css';
import JSONDATA from './Data.json';
import { useState } from 'react';
import {motion} from 'framer-motion';

function App() {
  const[searchTerm, setSearchTerm]=useState('')
  return (
    <div className="App">
      <motion.input type="text" placeholder="Buscar" onChange={event=>{setSearchTerm(event.target.value)}}
       initial={{x: "200vw", y:"500px"}}
       animate={{
         x:"0",
         y:"0",
         transition:{duration: 1, ease: "easeInOut"}
       }}/>
      {JSONDATA.filter((val)=>{
        if(searchTerm ==""){
          return val
        }else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val, key)=>{
          return (
            <motion.div className="user" key={key}>
              <motion.p
               initial={{x: "200vw", y:"500px"}}
               animate={{
                 x:"0",
                 y:"0",
                 transition:{duration: 1, ease: "easeInOut"}
               }}>
               
                {val.name}</motion.p>
              
            </motion.div>
             );
      })}
  
    </div>
  );
}

export default App;
