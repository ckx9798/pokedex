/** @format */

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

import { RadarTypeColors } from "../types/TypeColor";

export default function PokemonRadarChart({ pokemon, colorByType }) {
  console.log(pokemon);
  if (!pokemon || !pokemon.stats) {
    return <div>로딩 중...</div>;
  }

  const stats = pokemon.stats;
  const result = stats.map((stat) => ({
    subject: stat.stat.name,
    base_stat: stat.base_stat,
  }));
  const typeColor = pokemon.types[0].type.name;

  return (
    <div
      className="bg-white rounded-2xl border"
      style={{ borderColor: colorByType }}
    >
      <RadarChart outerRadius={90} width={500} height={335} data={result}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 120]} />
        <Radar
          name={pokemon.name}
          dataKey="base_stat"
          stroke="#8482ae"
          fill={RadarTypeColors[typeColor]}
          fillOpacity={0.5}
        />
        <Tooltip />
      </RadarChart>
    </div>
  );
}
