import React from 'react'
import { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";
import './App.css'

const tabs = ["tomate", "lechuga", "manzana"]


export default function CardsExpand() {
    const [selected, setSelected] = useState(null)

  

  const valor = tabs[selected];
  return (
    <div className="App">
      <div className="card-container">
        {tabs.map((item, id) => <motion.div className="card" layoutId={item} onClick={() => setSelected(id)} key={item}>
          <motion.h2>{item}</motion.h2>
          <motion.p>Complete documentation of the Framer Motion animation library. A production-ready motion library for React.</motion.p>
        </motion.div>)}
      </div>

  <AnimatePresence>
  {selected !== null && (
  
      <motion.div className='overlap'>
        <motion.div  className="card card--overlap" layoutId={valor}>
      <motion.h2>{tabs[selected]}</motion.h2>
      <motion.p>Complete documentation of the Framer Motion animation library. A production-ready motion library for React.</motion.p>
      <motion.button onClick={() => setSelected(null)}> cerrar </motion.button>
    </motion.div>
      </motion.div>
    
  )}
</AnimatePresence>
    </div>
  )
}
