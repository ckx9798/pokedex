/** @format */

import {
  PokemonDetailResponse,
  PokemonListItem,
  PokemonListResponse,
} from "../types/Pokemon";
import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

export default function PokemonPage() {
  const [pokemonList, setPokemonList] = useState<PokemonDetailResponse[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const isFetchingRef = useRef<boolean>(false);

  const fetchPokemonList = async (page: number) => {
    if (isFetchingRef.current) return; // 중복 호출 방지
    isFetchingRef.current = true;

    const offset = (page - 1) * 20;

    const response = await axios.get<PokemonListResponse>(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
    );

    const pokemonResults = response.data.results;

    const pokemonDetails = await Promise.all(
      pokemonResults.map(async (pokemon: PokemonListItem) => {
        const detailsResponse = await axios.get<PokemonDetailResponse>(
          pokemon.url
        );
        return detailsResponse.data;
      })
    );
    setPokemonList((prev) => [...prev, ...pokemonDetails]);
    isFetchingRef.current = false;
  };

  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  const fetchmore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Pokédex
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pokemonList.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>

      <button
        className="mt-8 mx-auto block bg-yellow-400 hover:bg-yellow-500 text-blue-700 font-semibold py-2 px-4 rounded-full transition-colors"
        onClick={fetchmore}
      >
        Load More
      </button>
    </div>
  );
}
