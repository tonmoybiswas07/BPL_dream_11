import Player from "../Player/Player";
import type TPlayers from "../../type";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container md:mx-auto">
      {players.map((player: TPlayers[], index: number) => (
        <Player key={index} player={player}></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
