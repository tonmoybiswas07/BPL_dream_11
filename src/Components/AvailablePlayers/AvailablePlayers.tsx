import React from 'react';
import Player from '../Player/Player';
import type TPlayers from '../../type';



const AvailablePlayers = ({players}) => {
    return (
        <div className="grid grid-cols-3 gap-5 container mx-auto">
            {
                players.map((player:TPlayers[],index:number)=> <Player key={index}  player={player}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;