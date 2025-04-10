/** @format */

import { RadarTypeColors, typeColors } from "../types/TypeColor";
import { useEffect, useState } from "react";

import PokemonImage from "../components/PokemonImage";
import PokemonInfo from "../components/PokemonInfo";
import PokemonRadarChart from "../components/PokemonRadarChart";
import PokemonRevolution from "../components/PokemonRevolution";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState([]);
  const [description, setDescription] = useState("");

  const param = useParams();

  const fetchPokemonDetailInfo = async () => {
    try {
      // 1. 포켓몬 기본 정보 요청
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${param.id}`
      );
      const pokemonData = response.data;
      setPokemon(pokemonData);

      // 2. species 요청 (설명 포함)
      const speciesResponse = await axios.get(pokemonData.species.url);
      const speciesData = speciesResponse.data;

      // 3. 한국어 설명 찾기
      const flavor = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === "ko"
      );

      setDescription(flavor?.flavor_text.replace(/\f/g, " ") || "");
    } catch (error) {
      console.error("포켓몬 정보 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchPokemonDetailInfo();
  }, [param.id]);

  const type = pokemon.types?.[0].type.name;
  const colorByType = RadarTypeColors[type];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100">
      {/* 왼쪽 네비게이션 */}
      <div className="flex items-center justify-between w-full lg:w-1/5 p-4 bg-gray-800 text-white">
        <button className="flex items-center gap-2 text-sm">
          <span className="material-icons">arrow_back</span>
          No.0001 이상해씨
        </button>
      </div>

      {/* 포켓몬 상세 정보 카드 */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/5 bg-white shadow-lg rounded-lg">
        {/* 텍스트 섹션 */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="flex flex-col items-start gap-1">
              <span
                className="text-2xl font-semibold text-gray-400"
                style={{ color: colorByType }}
              >
                No. {pokemon.id}
              </span>
              <span
                className="text-5xl font-bold capitalize tracking-wide"
                style={{ color: colorByType }}
              >
                {pokemon.name}
              </span>
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed text-base">
              {description}
            </p>
          </div>
          {/* 태그 섹션 */}
          {/* <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
              스칼렛
            </span>
            <span className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-sm">
              바이올렛
            </span>
          </div> */}
          <div className="w-screen bg-[url('/bg_pattern.jpg')] flex justify-center items-center flex-col py-10">
            <div className="flex items-center justify-center w-[1200px] bg-white rounded-4xl">
              <PokemonImage pokemon={pokemon} />
              <div>
                <PokemonInfo pokemon={pokemon} />
                <PokemonRadarChart pokemon={pokemon} />
              </div>
            </div>
            <PokemonRevolution pokemon={pokemon} />
          </div>
        </div>

        {/* 버튼 섹션 */}
        <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition duration-200">
          이상해풀 상품 보러가기
        </button>
      </div>

      {/* 오른쪽 네비게이션 */}
      <div className="flex items-center justify-between w-full lg:w-1/5 p-4 bg-gray-800 text-white">
        <button className="flex items-center gap-2 text-sm ml-auto">
          No.0003 이상해꽃
          <span className="material-icons">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
