import React, { useState } from 'react';
import userImg from "../../assets/Group.jpg"
import flag from "../../assets/Group (1).jpg"

const PlayerCard = ({player,availableBalance,setAvailableBalance,purchasedPlayer,setPurchasedPlayer}) => {
    
    const [isSelected, setIsSelected] = useState(false);
    const handelSelected = (playerData)=>{
        const playerPrice = parseInt(playerData.price.split("$").join("").split(",").join(""))
        if(availableBalance<playerPrice){
            alert("Not Enough Coins!")
            return
        }
        setIsSelected(true)
            setAvailableBalance(availableBalance-playerPrice);
            setPurchasedPlayer([...purchasedPlayer,playerData])
    }

    return (
        <div className="card bg-base-100  shadow-sm p-4">
  <figure>
    <img className='rounded-2xl object-cover'
      src={player.img
}
      alt="Shoes" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
        <img className='w-[20px] h-[17px]' src={userImg} alt="" /> <h2 className="card-title ml-2">{player.name}</h2>
    </div>
    <div className='flex justify-between mt-3 border-b-1 pb-2 '>
        <div className='flex items-center '>
            <img className='w-[16px] h-[16px]' src={flag} alt="" />
            <span className='ml-2'>{player.country}</span>
        </div>
        <button className='btn'>{player.role}</button>
    </div>
    <div className='flex justify-between font-bold'>
        <span>Rating</span>
        <span>{player.rating}</span>
    </div>
    <div className='flex justify-between mt-4'>
        <span className='font-bold'>{player.battingStyle}</span>
        <span>{player.bowlingStyle}</span>
    </div>
    <div className='flex justify-between mt-4'>
        <p className='font-bold'>Price: {player.price}</p>
        <button disabled={isSelected} onClick={()=>{handelSelected(player)}} className='btn'>{isSelected===true?"Selected":"Choose Player"}</button>
    </div>
    <div>

    </div>

    
  </div>
</div>
    );
};

export default PlayerCard;