


import './App.css'
import navImg from "./assets/logo.png"
import dollerImg from "./assets/dollar 1.png"
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}
const playersPromise = fetchPlayers()

function App() {
  const [toggle, setToggle] = useState(false)
  const [availableBalance, setAvailableBalance] = useState(600000)
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  // Remove a player from selected list and refund their price
  const handleRemovePlayer = (playerToRemove) => {
    const playerPrice = parseInt(
      playerToRemove.price.split("$").join("").split(",").join("")
    );
    setAvailableBalance(availableBalance + playerPrice);
    setPurchasedPlayer(purchasedPlayer.filter(p => p.name !== playerToRemove.name));
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="logo" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1 font-bold">{availableBalance.toLocaleString()}</span>
          <span className="mr-1 font-bold">Coin</span>
          <img src={dollerImg} alt="coin" />
        </div>
      </div>

      {/* ── BPL BANNER ── */}
      <section
        className="max-w-[1200px] mx-auto my-6 rounded-3xl overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          minHeight: "260px",
        }}
      >
        {/* decorative cricket-ball dots */}
        <div className="absolute top-6 left-8 w-24 h-24 rounded-full border-4 border-yellow-400 opacity-10"></div>
        <div className="absolute bottom-4 right-10 w-36 h-36 rounded-full border-4 border-yellow-400 opacity-10"></div>
        <div className="absolute top-10 right-32 w-12 h-12 rounded-full bg-yellow-400 opacity-10"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center py-14 px-6">
          <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase mb-2">
            🏏 Bangladesh Premier League
          </span>
          <h1 className="text-white font-extrabold text-3xl md:text-5xl leading-tight mb-3">
            Assemble Your <span className="text-yellow-400">Dream XI</span>
          </h1>
          <p className="text-blue-200 text-base md:text-lg max-w-xl mb-6">
            Browse top BPL players, check their stats, and build the ultimate cricket squad within your budget.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setToggle(true)}
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-7 rounded-full transition"
            >
              Build Your Team
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-3 px-7 rounded-full transition">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* ── TOGGLE BAR ── */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Players (${purchasedPlayer.length}/6)`}
        </h2>
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-5 border border-gray-300 rounded-l-full font-semibold transition
              ${toggle === true
                ? "bg-yellow-400 border-yellow-400 text-gray-900"
                : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-5 border border-gray-300 rounded-r-full font-semibold transition
              ${toggle === false
                ? "bg-yellow-400 border-yellow-400 text-gray-900"
                : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            Selected <span className="ml-1 bg-gray-800 text-white text-xs rounded-full px-2 py-0.5">{purchasedPlayer.length}</span>
          </button>
        </div>
      </div>

      {/* ── MAIN SECTION ── */}
      {toggle === true
        ? (
          <Suspense fallback={<div className="flex justify-center py-10"><span className="loading loading-spinner loading-md"></span></div>}>
            <AvailablePlayers
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              playersPromise={playersPromise}
              purchasedPlayer={purchasedPlayer}
              setPurchasedPlayer={setPurchasedPlayer}
            />
          </Suspense>
        )
        : (
          <SelectedPlayers
            purchasedPlayer={purchasedPlayer}
            handleRemovePlayer={handleRemovePlayer}
            onAddMore={() => setToggle(true)}
          />
        )
      }

      {/* ── NEWSLETTER SUBSCRIBE ── */}
      <section className="bg-gray-50 mt-16 py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-extrabold text-3xl mb-2 text-gray-900">Subscribe to Our Newsletter</h2>
          <p className="text-gray-500 mb-6">Get the latest BPL news, player updates, and match highlights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 border border-gray-300 rounded-full py-3 px-5 text-sm outline-none focus:border-yellow-400 transition"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-7 rounded-full transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 mt-0">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div>
            <img src={navImg} alt="logo" className="w-12 h-12 mb-3" />
            <h3 className="text-white font-bold text-lg mb-2">BPL Dream XI</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Build your perfect cricket squad with the best BPL players. Manage your budget and dominate the leaderboard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Available Players</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">My Team</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">How It Works</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-3">Subscribe for the latest BPL updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-sm text-white outline-none focus:border-yellow-400 transition"
              />
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded-full text-sm transition">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BPL Dream XI. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
