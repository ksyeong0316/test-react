import './App.css';
import NameTag from './NameTag'
// import { useEffect } from 'react'

function App() {
  // useEffect(()=>{
  //   setInterval(()=>{

  //   }, 1000/60)
  // })
  
  return (
    <>
    <h1>변경됨</h1>
    <h1>변경됨1</h1>
      <NameTag type='dog' name='meyow' size='small' sound='low' appearence='cute'/>
    </>
  );
}

export default App;