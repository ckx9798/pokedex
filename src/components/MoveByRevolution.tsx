/** @format */

import { useNavigate } from "react-router-dom";

export default function MoveByRevolution({ name }) {
  const navigate = useNavigate();

  const navigateByRebolution = (name) => {
    navigate(`/pokemon/${name}`);
  };

  return (
    <div
      key={name}
      className="flex flex-col items-center"
      onClick={() => navigateByRebolution(name)}
    >
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
        className="w-28 h-28 object-contain"
      />
      <span className="capitalize mt-4 text-lg font-medium">{name}</span>
    </div>
  );
}
