/** @format */
import "../style/pokemonCard.css";

import { IPokemonProps } from "../types/Pokemon";
import { RadarTypeColors } from "../types/TypeColor";
import formatNumber from "../utils/formatNumber";

export default function PokemonCard({ pokemon }: IPokemonProps) {
  console.log(pokemon);
  return (
    <div className="relative w-[300px] h-[450px] text-white font-sans">
      {/* 배경 이미지 */}
      <img src="/pokemon_bg.png" alt="카드 배경" />

      <div className="absolute top-4 left-13">
        <img
          src={pokemon?.sprites?.other?.home.front_default}
          alt="이미지"
          width={200}
        />
      </div>

      {/* 설명 영역 (카드 하단 박스 안쪽) */}
      <div className="absolute bottom-0 left-0 px-6 z-10 w-full h-[200px]">
        {/* 번호 + 이름 */}
        <p className="text-lg font-semibold text-gray-300 mt-2">
          No. {formatNumber(pokemon.id)}
        </p>
        <h2 className="text-3xl font-bold text-white mt-4 capitalize">
          {pokemon.name}
        </h2>

        {/* 타입 */}
        <div className="flex gap-4 w-full mt-12">
          {pokemon.types.map((typeObj, i) => {
            const type = typeObj.type.name;
            const typeBgColor = RadarTypeColors[type];

            return (
              <span
                className="py-2 rounded-full text-md font-semibold w-1/2 flex justify-center items-center outline outline-offset-2 outline-amber-200"
                key={i}
                style={{
                  backgroundColor: typeBgColor,
                }}
              >
                {typeObj.type.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
