/** @format */

import { useEffect, useState } from "react";

import MoveToHome from "../components/MoveToHome";
import MoveToNextPokemon from "../components/MoveToNextPokemon";
import MoveToPrevPokemon from "../components/MoveToPrevPokemon";
import PokemonImage from "../components/PokemonImage";
import PokemonInfo from "../components/PokemonInfo";
import PokemonName from "../components/PokemonName";
import PokemonRadarChart from "../components/PokemonRadarChart";
import PokemonRevolution from "../components/PokemonRevolution";
import { RadarTypeColors } from "../types/TypeColor";
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
      <MoveToPrevPokemon pokemon={pokemon} />

      {/* 포켓몬 상세 정보 카드 */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/5 bg-white shadow-lg rounded-lg">
        {/* 텍스트 섹션 */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="w-screen bg-[url('/bg_pattern.jpg')] flex justify-center items-center flex-col py-10">
            <div
              className="flex items-center justify-center w-[1200px] bg-white rounded-4xl border-2 pt-14 pb-20"
              style={{ borderColor: colorByType }}
            >
              <div className="flex flex-col gap-10 w-full">
                <PokemonName pokemon={pokemon} description={description} />
                <div className="flex justify-center gap-10">
                  <PokemonImage pokemon={pokemon} />
                  <div className="flex flex-col justify-between gap-4">
                    <PokemonInfo pokemon={pokemon} colorByType={colorByType} />
                    <PokemonRadarChart
                      pokemon={pokemon}
                      colorByType={colorByType}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PokemonRevolution pokemon={pokemon} colorByType={colorByType} />
          </div>
        </div>

        {/* 버튼 섹션 */}
        <MoveToHome />
      </div>

      {/* 오른쪽 네비게이션 */}
      <MoveToNextPokemon pokemon={pokemon} />
    </div>
  );
}
