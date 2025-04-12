/** @format */

import { RadarTypeColors } from "../types/TypeColor";

export default function PokemonImage({ pokemon }) {
  const type = pokemon.types?.[0].type.name;
  const colorByType = RadarTypeColors[type];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 포켓몬 상세 카드 */}
      <div
        className={
          "bg-white flex flex-col lg:flex-row justify-center items-center w-full h-full max-w-5xl border rounded-tl-[150px] rounded-2xl px-12 "
        }
        style={{ borderColor: colorByType }}
      >
        {/* 이미지 섹션 */}
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src={pokemon?.sprites?.other["official-artwork"].front_default}
            alt="메인 이미지"
            width={400}
          />

          <div className="flex my-10 w-full justify-between px-10">
            <img
              src={pokemon?.sprites?.other.showdown.front_default}
              alt="앞모습 이미지"
              width={120}
            />
            <img
              src={pokemon?.sprites?.other.showdown.back_default}
              alt="뒷모습 이미지"
              width={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
