import React, { use } from 'react';
import type TPlayers from '../../type';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';


interface PlayersProps{
    playerPromise:Promise<TPlayers[]>
}

const Players = ({playerPromise}:PlayersProps) => {
    const players = use(playerPromise)
    console.log(players)

    return (
        <div>
            <div className='flex justify-between items-center container mx-auto my-7'>
                <h2 className='text-3xl font-bold'>Available Players</h2>
                <div>
                    <button className="btn btn-secondary">Available</button>
                    <button className="btn ">Selected</button>
                </div>
            </div>


            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Players;