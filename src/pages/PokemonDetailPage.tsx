/** @format */

import { RadarTypeColors, typeColors } from "../types/TypeColor";
import { useEffect, useState } from "react";

import PokemonRadarChart from "../components/PokemonRadarChart";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState([]);

  const param = useParams();

  const fetchPokemonDetailInfo = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${param.id}`
    );
    setPokemon(response.data);
  };

  useEffect(() => fetchPokemonDetailInfo, []);

  const playCry = () => {
    const audio = new Audio(pokemon?.cries?.latest);
    audio.play();
  };

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
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/5 bg-white shadow-lg rounded-lg p-6">
        {/* 텍스트 섹션 */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h2
            className="text-xl font-bold flex flex-col"
            style={{ color: colorByType || "black" }}
          >
            <span>No.{pokemon.id}</span>
            <span className="text-4xl">{pokemon.name}</span>
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

          <div className="flex w-screen items-center justify-center bg-[url('/bg_pattern.jpg')]">
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
                    src={
                      pokemon?.sprites?.other["official-artwork"].front_default
                    }
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
            <div className="p-6">
              {/* 상세 정보 테이블 */}
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
              <div
                className="bg-white rounded-2xl m-3 border"
                style={{ borderColor: colorByType }}
              >
                <PokemonRadarChart pokemon={pokemon} />
              </div>
            </div>
            {/* <table className="w-full mt-10 bg-white shadow-md rounded-2xl">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                  <th className="px-4 py-3 border-b">스탯 이름</th>
                  <th className="px-4 py-3 border-b">기본 수치 (base_stat)</th>
                  <th className="px-4 py-3 border-b">Effort</th>
                </tr>
              </thead>
              <tbody>
                {pokemon?.stats?.map((statObj, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3 text-gray-700">
                      {statObj.stat.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {statObj.base_stat}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {statObj.effort}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>{" "} */}
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
