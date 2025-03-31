/** @format */

export default function PokemonCard({ pokemon }) {
  return (
    <div>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} alt="" />

      <img src={pokemon.sprites.back_default} alt="" />

      <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
      <img src={pokemon.sprites.other.home.front_default} alt="" />
      {/* <img src={pokemon.sprites.other.official_artwork.front_default} alt="" /> */}
      <img src={pokemon.sprites.other.showdown.front_default} alt="" />
      <img src={pokemon.sprites.other.showdown.back_default} alt="" />

      <p>{pokemon.abilities[0].ability.name}</p>

      <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p>

      <p>
        {pokemon.stats.map((stat) => (
          <p>
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
      </p>

      <p>
        {pokemon.types.map((type) => (
          <p>{type.type.name}</p>
        ))}
      </p>
      <button className="relative inline-block px-6 py-2 text-white bg-red-500 font-semibold rounded transform skew-y-20 hover:bg-red-600 transition duration-500">
        <span className="inline-block transform -skew-x-12">
          고지 상품 보러가기
        </span>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
          &gt;
        </span>
      </button>
    </div>
  );
}
