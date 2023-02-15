import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './App.css'


const tabs = ["tomate", "lechuga", "manzana", "naranja"]

export default function Tabs() {
    
  const [selected, setSelected] = useState(tabs[0])
  return (
    <div>
        <nav>
        <ul>
          {tabs.map(tab => 
            <li key={tab} onClick={() => setSelected(tab) }>{tab}

             {selected === tab ? <motion.span className='underline' layoutId="underline"></motion.span> : null} 
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
