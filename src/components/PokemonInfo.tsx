/** @format */

import { typeColors } from "../types/TypeColor";

export default function PokemonInfo({ pokemon, colorByType }) {
  const playCry = () => {
    const audio = new Audio(pokemon?.cries?.latest);
    audio.play();
  };

  // 정보 배열로 구성
  const infoItems = [
    {
      label: "타입",
      content: (
        <div className="flex flex-wrap gap-2">
          {pokemon?.types?.map((typeObj, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1 text-white rounded-full text-sm ${
                typeColors[typeObj.type.name] || "bg-gray-300"
              }`}
            >
              {typeObj.type.name}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "키",
      content: `${pokemon.height / 10} m`,
    },
    {
      label: "몸무게",
      content: `${pokemon.weight / 10} kg`,
    },
    {
      label: "능력",
      content: (
        <div className="flex flex-wrap gap-2">
          {pokemon?.abilities?.map((ability, index) => (
            <span
              key={index}
              className={`inline-block px-3 py-1 rounded-full text-sm ${
                ability.is_hidden
                  ? "bg-gray-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {ability.ability.name}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "울음소리",
      content: (
        <button onClick={playCry} className="text-xl">
          ⚡
        </button>
      ),
    },
  ];

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-md border p-6 space-y-4 bg-white"
      style={{ borderColor: colorByType }}
    >
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 rounded-xl p-4 shadow-sm border border-gray-200"
        >
          <div className="w-24 font-bold text-gray-700 text-center">
            {item.label}
          </div>
          <div className="flex-1 text-gray-800 ml-2">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
