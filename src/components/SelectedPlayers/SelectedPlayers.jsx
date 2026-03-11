// import React from 'react';

// const SelectedPlayers = ({purchasedPlayer}) => {
//     console.log(purchasedPlayer)
//     return (
//         <div className='max-w-[1200px]'>
//             selected
//         </div>
//     );
// };

// export default SelectedPlayers;

import React from 'react';

// SelectedPlayers.jsx
// Place this file at: src/components/SelectedPlayers/SelectedPlayers.jsx

const SelectedPlayers = ({ purchasedPlayer, handleRemovePlayer, onAddMore }) => {

  // If no players are selected yet, show an empty state
  if (purchasedPlayer.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-16 text-center">
        <p className="text-gray-400 text-lg mb-4">No players selected yet.</p>
        <button
          onClick={onAddMore}
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-full transition"
        >
          Browse Players
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 py-6">

      {/* Section heading */}
      <h3 className="font-bold text-xl text-gray-700 mb-4">
        Selected Players ({purchasedPlayer.length}/6)
      </h3>

      {/* Player list */}
      <div className="flex flex-col gap-3">
        {purchasedPlayer.map((player, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm"
          >
            {/* Left: player image + info */}
            <div className="flex items-center gap-4">
              <img
                src={player.img}
                alt={player.name}
                className="w-14 h-14 rounded-xl object-cover border border-gray-200"
              />
              <div>
                <p className="font-bold text-gray-800 text-base">{player.name}</p>
                <p className="text-sm text-gray-500">{player.role} · {player.battingStyle}</p>
              </div>
            </div>

            {/* Right: delete button */}
            <button
              onClick={() => handleRemovePlayer(player)}
              className="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full p-2 transition"
              title="Remove player"
            >
              {/* Simple ✕ icon — no extra library needed */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Add More Player button */}
      <div className="mt-6 text-center">
        <button
          onClick={onAddMore}
          disabled={purchasedPlayer.length >= 6}
          className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 font-bold py-3 px-8 rounded-full transition"
        >
          {purchasedPlayer.length >= 6 ? "Team Full (6/6)" : "+ Add More Players"}
        </button>
      </div>

    </div>
  );
};

export default SelectedPlayers;