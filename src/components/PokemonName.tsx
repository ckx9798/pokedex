/** @format */

import { RadarTypeColors } from "../types/TypeColor";
import formatNumber from "../utils/formatNumber";

export default function PokemonName({ pokemon, description }) {
  const type = pokemon.types?.[0].type.name;
  const colorByType = RadarTypeColors[type];
  const form = formatNumber;
  return (
    <div className="bg-white rounded-2xl px-20">
      <h2 className="flex flex-col items-start gap-1">
        <span
          className="text-2xl font-semibold text-gray-400"
          style={{ color: colorByType }}
        >
          No. {form(pokemon.id)}
        </span>
        <span
          className="text-5xl font-bold capitalize tracking-wide"
          style={{ color: colorByType }}
        >
          {pokemon.name}
        </span>
      </h2>
      <p className="text-gray-700 mt-6 leading-relaxed text-base">
        {description}
      </p>
    </div>
  );
}
