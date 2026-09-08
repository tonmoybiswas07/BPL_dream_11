
import { FaFlag, FaUserAlt } from "react-icons/fa";


const Player = ({ player }) => {
  console.log(player);

  return (
   <div className="group">
  <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-md hover:shadow-2xl rounded-2xl overflow-hidden border border-base-200 transition-all duration-300 hover:-translate-y-2">

    {/* Player Image */}
    <figure className="relative h-64 overflow-hidden bg-gray-100">
      <img
        src={player.playerImage}
        alt={player.playerName}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />

      {/* Player Type Badge */}
      <div className="absolute top-4 right-4">
        <span className="bg-black/80 text-white text-xs font-semibold px-3 py-2 rounded-full backdrop-blur-sm">
          {player.playerType}
        </span>
      </div>
    </figure>

    {/* Card Body */}
    <div className="card-body p-5">

      {/* Player Name */}
      <h2 className="card-title text-xl font-bold flex items-center gap-2">
        <FaUserAlt className="text-green-600 text-base" />
        {player.playerName}
      </h2>

      {/* Divider */}
      <div className="divider my-1"></div>

      {/* Country & Player Type */}
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-2 text-gray-600">
          <FaFlag className="text-green-600" />
          <p className="font-medium">{player.origin}</p>
        </div>

        <span className="text-sm bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-700">
          {player.playerType}
        </span>

      </div>

      {/* Bowling & Batting */}
      <div className="grid grid-cols-2 gap-3 mt-4">

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">
            Bowling Style
          </p>
          <p className="text-sm font-semibold text-gray-700">
            {player.bowlingStyle}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">
            Batting Style
          </p>
          <p className="text-sm font-semibold text-gray-700">
            {player.battingStyle}
          </p>
        </div>

      </div>

      {/* Price & Button */}
      <div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-200">

        <div>
          <p className="text-xs text-gray-400">
            Player Price
          </p>

          <p className="text-lg font-bold text-green-600">
            ${player.price.toLocaleString()}
          </p>
        </div>

        <button className="btn bg-green-600 hover:bg-green-700 text-white border-none rounded-lg px-4">
          Choose Player
        </button>

      </div>

    </div>
  </div>
</div>
  );
};

export default Player;
