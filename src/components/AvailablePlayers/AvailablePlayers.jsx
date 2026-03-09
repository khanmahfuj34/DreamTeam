import React, { use } from 'react';
import userImg from "../../assets/Group.jpg"
import flag from "../../assets/Group (1).jpg"

const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto mt-4 p-4 grid sm:grid-cols-2 md:grid-cols-3 '>
        {
            playerData.map(player=>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img className='rounded-2xl'
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
        <button className='btn'>Choose Player</button>
    </div>
    <div>

    </div>

    
  </div>
</div>)
        }

           {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
        <img className='w-[20px] h-[17px]' src={userImg} alt="" /> <h2 className="card-title ml-2">Virat Kohli</h2>
    </div>
    <div className='flex justify-between mt-3 border-b-1 pb-2 '>
        <div className='flex items-center '>
            <img className='w-[16px] h-[16px]' src={flag} alt="" />
            <span className='ml-2'>India</span>
        </div>
        <button className='btn'>Allrounder</button>
    </div>
    <div className='flex justify-between font-bold'>
        <span>Rating</span>
        <span>9.5</span>
    </div>
    <div className='flex justify-between mt-4'>
        <span className='font-bold'>Laft Hand Bat</span>
        <span>Right Hand Bowl</span>
    </div>
    <div className='flex justify-between mt-4'>
        <p className='font-bold'>Price: $15000</p>
        <button className='btn'>Choose Player</button>
    </div>
    <div>

    </div>

    
  </div>
</div> */}
           
        </div>
    );
};

export default AvailablePlayers;