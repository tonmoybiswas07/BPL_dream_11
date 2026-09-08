import  { use, useState } from 'react';
import type TPlayers from '../../type';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';


interface PlayersProps{
    playerPromise:Promise<TPlayers[]>
}

const Players = ({playerPromise}:PlayersProps) => {
    const players = use(playerPromise)
    console.log(players)

    const [buttonType,setButtonType]=useState("available")

    const handleClickType=(type:"selected"|"available")=>{
setButtonType(type)
    }

    return (
        <div>
            <div className='flex justify-between items-center container mx-auto my-7'>
                <h2 className='text-3xl font-bold'>{buttonType==="available"?"Available Players":"Selected Players"}</h2>
                <div>
                    <button onClick={()=>handleClickType("available")} className={`btn ${buttonType==="available"?"btn-success":""} rounded-r-none`}>Available</button>
                    <button onClick={()=>handleClickType("selected")} className={`btn rounded-l-none ${buttonType==="selected"?"btn-success":""}`}>Selected</button>
                </div>
            </div>


            {
                buttonType==="available"?<AvailablePlayers players={players}/>:<SelectedPlayers/>
            }
        </div>
    );
};

export default Players;