/** @format */

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import formatNumber from "../utils/formatNumber";
import { useNavigate } from "react-router-dom";

export default function MoveToNextPokemon({ pokemon }) {
  const nextNumber = pokemon.id + 1;
  const navigate = useNavigate();
  const navigateByPokemonId = (id) => navigate(`/pokemon/${nextNumber}`);

  return (
    <div className="flex items-center justify-end w-full lg:w-1/5 p-4 bg-gray-800 text-white hover:bg-gray-900 transition duration-200">
      <button
        className="flex items-center gap-3 text-lg justify-center mr-2"
        onClick={() => navigateByPokemonId(nextNumber)}
      >
        No. {formatNumber(nextNumber)}
        <IoArrowForwardCircleOutline color="red" size={30} />
      </button>
    </div>
  );
}
