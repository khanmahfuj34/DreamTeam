
import './App.css'
import navImg from "./assets/logo.png"
import dollerImg from "./assets/dollar 1.png"
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense } from 'react'

const fetchPlayers = async () =>{
  const res = await fetch('/players.json')
  return res.json();
}

function App() {
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
    
    <Suspense fallback ={<span className="loading loading-spinner loading-md"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
    </Suspense>
    <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
