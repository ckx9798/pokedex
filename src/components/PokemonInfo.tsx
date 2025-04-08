/** @format */

import { RadarTypeColors, typeColors } from "../types/TypeColor";

export default function PokemonInfo({ pokemon }) {
  const playCry = () => {
    const audio = new Audio(pokemon?.cries?.latest);
    audio.play();
  };

  const type = pokemon.types?.[0].type.name;
  const colorByType = RadarTypeColors[type];

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-md border mx-3"
      style={{ borderColor: colorByType }}
    >
      <table className="bg-white border-collapse w-full">
        <tbody>
          {/* 타입 */}
          <tr className="border-b border-gray-200">
            <td className="w-48 px-4 py-4 font-semibold text-gray-700 text-center border-r border-gray-200">
              타입
            </td>
            <td className="px-4 py-4 text-gray-600">
              {pokemon?.types?.map((typeObj, index) => (
                <span
                  key={index}
                  className={`inline-block px-3 py-1 text-white rounded-full text-sm mr-2 ${
                    typeColors[typeObj.type.name] || "bg-gray-300"
                  }`}
                >
                  {typeObj.type.name}
                </span>
              ))}
            </td>
          </tr>

          {/* 키 */}
          <tr className="border-b border-gray-200">
            <td className="w-24 px-4 py-4 font-semibold text-gray-700 text-center border-r border-gray-200">
              키
            </td>
            <td className="px-4 py-4 text-gray-600">{pokemon.height / 10} m</td>
          </tr>

          {/* 몸무게 */}
          <tr className="border-b border-gray-200">
            <td className="w-24 px-4 py-4 font-semibold text-gray-700 text-center border-r border-gray-200">
              몸무게
            </td>
            <td className="px-4 py-4 text-gray-600">
              {pokemon.weight / 10} kg
            </td>
          </tr>

          {/* 능력 */}
          <tr>
            <td className="w-24 px-4 py-4 font-semibold text-gray-700 text-center border-r border-gray-200">
              능력
            </td>
            <td className="px-4 py-4 text-gray-600">
              {pokemon?.abilities?.map((ability, index) => (
                <span
                  key={index}
                  className={`inline-block px-3 py-1 rounded-full text-sm mr-2 ${
                    ability.is_hidden
                      ? "bg-gray-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {ability.ability.name}
                </span>
              ))}
            </td>
          </tr>

          {/* 몸무게 */}
          <tr className="border-t border-gray-200">
            <td className="w-24 px-4 py-4 font-semibold text-gray-700 text-center border-r border-gray-200">
              울음소리
            </td>
            <td className="px-4 py-4 text-gray-600">
              <button onClick={playCry}>⚡</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
