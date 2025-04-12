/** @format */

import { IoArrowBackCircleOutline } from "react-icons/io5";
import formatNumber from "../utils/formatNumber";
import { useNavigate } from "react-router-dom";

export default function MoveToPrevPokemon({ pokemon }) {
  const prevNumber = pokemon.id - 1;
  const navigate = useNavigate();
  const navigateByPokemonId = (id) => navigate(`/pokemon/${prevNumber}`);

  return (
    <div className="flex items-center justify-between w-full lg:w-1/5 p-4 bg-gray-800 text-white hover:bg-gray-900 transition duration-200">
      <button
        className="flex items-center gap-3 text-lg justify-center ml-2"
        onClick={() => navigateByPokemonId(prevNumber)}
      >
        <IoArrowBackCircleOutline color="red" size={30} />
        No. {formatNumber(prevNumber)}
      </button>
    </div>
  );
}
