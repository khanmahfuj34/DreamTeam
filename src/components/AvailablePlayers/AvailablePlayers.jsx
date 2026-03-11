import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise,availableBalance,setAvailableBalance, purchasedPlayer,setPurchasedPlayer }) => {
    const playerData = use(playersPromise)
    // console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto mt-4 p-4 grid grid-cols-1 md:grid-cols-3 '>
        {
            playerData.map(player=><PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}></PlayerCard>
            )
        }

          
           
        </div>
    );
};

export default AvailablePlayers;