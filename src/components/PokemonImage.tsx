/** @format */

import { RadarTypeColors } from "../types/TypeColor";

export default function PokemonImage({ pokemon }) {
  const type = pokemon.types?.[0].type.name;
  const colorByType = RadarTypeColors[type];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 my-10 py-20">
      {/* 포켓몬 상세 카드 */}
      <div
        className={
          "bg-white shadow-lg p-6 flex flex-col lg:flex-row items-center w-full max-w-5xl border rounded-tl-[150px] rounded-2xl"
        }
        style={{ borderColor: colorByType }}
      >
        {/* 이미지 섹션 */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <img
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            alt=""
            width={400}
          />

          <div className="flex gap-10 my-10">
            <img
              src={pokemon?.sprites?.other.showdown.front_default}
              alt=""
              width={100}
            />
            <img
              src={pokemon?.sprites?.other.showdown.back_default}
              alt=""
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
