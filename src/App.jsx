
import './App.css'
import navImg from "./assets/logo.png"
import dollerImg from "./assets/dollar 1.png"
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const fetchPlayers = async () =>{
  const res = await fetch('/players.json')
  return res.json();
}

function App() {
  const [toggle, setToggle] = useState(false)
  const playersPromise = fetchPlayers()

  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="text-xl"><img className='w-[60px],h-[60px]' src={navImg} alt="" /></a>
  </div>
  <div className="flex items-center">
    <span className='mr-1 font-bold'>600000000</span>
    <span className='mr-1 font-bold'> Coin</span>
    <img src={dollerImg} alt="" />
  </div>
      </div>
      <div className='border-b-1 border-red-100 max-w-[1200px] mx-auto  flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='font-semibold'>
          <button onClick={()=>setToggle(true)} className={`btn py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?" bg-blue-400":""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`btn py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false? "bg-blue-400":""}`}>Selected <span>(0)</span></button>
        </div>
      </div>
    
    {
      toggle === true?<Suspense fallback ={<span className="loading loading-spinner loading-md"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
    </Suspense>:<SelectedPlayers></SelectedPlayers>
    }
    
    </>
  )
}

export default App
