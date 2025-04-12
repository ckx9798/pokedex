/** @format */

import { useEffect, useState } from "react";

import MoveByRevolution from "./MoveByRevolution";
import axios from "axios";

export default function PokemonRevolution({ pokemon, colorByType }) {
  const [evolutionList, setEvolutionList] = useState([]);

  useEffect(() => {
    if (pokemon?.species?.url) {
      fetchEvolutionChain(pokemon.species.url);
    }
  }, [pokemon]);

  const fetchEvolutionChain = async (speciesUrl) => {
    try {
      // Step 1: species 요청해서 evolution_chain URL 얻기
      const speciesRes = await axios.get(speciesUrl);
      const evoChainUrl = speciesRes.data.evolution_chain.url;

      // Step 2: evolution-chain 요청
      const evoRes = await axios.get(evoChainUrl);
      const evoData = evoRes.data;

      // Step 3: 진화 트리 파싱
      const evoList = [];
      const traverseChain = (node) => {
        if (node?.species?.name) {
          evoList.push(node.species.name);
          node.evolves_to.forEach(traverseChain);
        }
      };
      traverseChain(evoData.chain);

      setEvolutionList(evoList);
    } catch (error) {
      console.error("진화 정보 가져오기 실패:", error);
    }
  };

  return (
    <div className="my-10 flex flex-col items-center">
      <div
        className="flex flex-col gap-10 items-center bg-white py-10 rounded-3xl border-2"
        style={{ borderColor: colorByType }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-500">
          Revolution Chain
        </h2>
        <div className="flex gap-30 w-[1200px] justify-center">
          {evolutionList.map((name) => (
            <MoveByRevolution name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
