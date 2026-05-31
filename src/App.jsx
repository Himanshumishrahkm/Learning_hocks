import Section2 from './section2/Section2.jsx'
import Section1 from './section1/Section1.jsx'
import './App.css'
import { useState } from 'react'



function App() {
  
  const [num, setNum] = useState(0);


  return (
    <>
    <div className='m-7 flex flex-col gap-3.5'>
     <Section1 value = {num}/>
     <Section2 value = {setNum}/>
     </div>
    </>
  )
}

export default App
