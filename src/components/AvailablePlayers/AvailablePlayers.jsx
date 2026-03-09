import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div>
           
        </div>
    );
};

export default AvailablePlayers;