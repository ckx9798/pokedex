/** @format */

import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

export default function PokemonDetailPage() {
  // 타입별 색상 매핑
  const typeColors = {
    bug: "bg-green-500",
    dark: "bg-gray-800",
    dragon: "bg-purple-500",
    electric: "bg-yellow-400",
    fairy: "bg-pink-400",
    fighting: "bg-red-600",
    fire: "bg-orange-500",
    flying: "bg-blue-300",
    ghost: "bg-indigo-500",
    grass: "bg-green-400",
    ground: "bg-yellow-600",
    ice: "bg-blue-400",
    normal: "bg-gray-400",
    poison: "bg-purple-700",
    psychic: "bg-pink-600",
    rock: "bg-yellow-800",
    steel: "bg-gray-600",
    water: "bg-blue-500",
  };

  const [pokemon, setPokemon] = useState([]);
  console.log(pokemon);

  const param = useParams();

  const fetchPokemonDetailInfo = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${param.id}`
    );
    setPokemon(response.data);
  };

  useEffect(() => fetchPokemonDetailInfo, []);

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
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/5 bg-white shadow-lg rounded-lg p-6">
        {/* 텍스트 섹션 */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-xl font-bold">
            No.{pokemon.id} {pokemon.name}
          </h2>
          <p className="text-gray-600 mt-2">
            햇빛을 받을수록 몸에 힘이 솟아나 등의 꽃봉오리가 커진다.
          </p>

          {/* 태그 섹션 */}
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">
              스칼렛
            </span>
            <span className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full text-sm">
              바이올렛
            </span>
          </div>

          <div className="flex">
            <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 px-4 my-10 py-20 rounded-2xl">
              {/* 포켓몬 상세 카드 */}
              <div className="bg-white shadow-lg p-6 flex flex-col lg:flex-row items-center w-full max-w-5xl border border-green-400 rounded-tl-[150px] rounded-2xl">
                {/* 이미지 섹션 */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <img
                    src={pokemon?.sprites?.other.dream_world.front_default}
                    alt=""
                    width={400}
                  />
                </div>
                {/* 상세 정보 테이블 */}
                <table className="w-full mt-14 bg-gray-100 shadow-md rounded-2xl">
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
                      <td className="px-4 py-4 text-gray-600">
                        {pokemon.height / 10} m
                      </td>
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
                  </tbody>
                </table>
              </div>
            </div>
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
