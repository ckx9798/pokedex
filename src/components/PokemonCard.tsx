/** @format */
import "../style/pokemonCard.css";

export default function PokemonCard({ pokemon }) {
  //   return (
  //     <div className=" border-2  border-sky-200 bg-white">
  //       <img src={pokemon.sprites.other.home.front_default} alt="" />

  //       <div>{pokemon.name}</div>
  //       <p>
  //         {pokemon.stats.map((stat) => (
  //           <p>
  //             {stat.stat.name}: {stat.base_stat}
  //           </p>
  //         ))}
  //       </p>

  //       <p>
  //         {pokemon.types.map((type) => (
  //           <p>{type.type.name}</p>
  //         ))}
  //       </p>
  //       <button className="relative inline-block px-6 py-2 text-white bg-red-500 font-semibold rounded transform skew-y-20 hover:bg-red-600 transition duration-500">
  //         <span className="inline-block transform -skew-x-12">
  //           고지 상품 보러가기
  //         </span>
  //         <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
  //           &gt;
  //         </span>
  //       </button>
  //     </div>
  //   );
  // }
  //   return (
  //     <div className="shadow-xl w-90 text-white font-sans bg-red-100 ">
  //       <div className="bg-[url('/pokemon_bg.png')] bg-cover bg-center  object-cover">
  //         {" "}
  //         {/* 포켓몬 이미지 */}
  //         <div className="rounded-full p-4 mb-4 relative">
  //           <img
  //             src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png"
  //             alt="Mega Venusaur"
  //             className="w-40 h-40 mx-auto"
  //           />
  //         </div>
  //         {/* 번호 + 이름 */}
  //         <div className="text-left">
  //           <p className="text-gray-400 text-sm">0003</p>
  //           <h2 className="text-xl text-gray-400 font-bold mb-2">
  //             Mega Venusaur
  //           </h2>
  //         </div>
  //         {/* 타입 */}
  //         <div className="flex justify-center gap-2 mt-10">
  //           <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
  //             Grass
  //           </span>
  //           <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
  //             Poison
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="relative w-[300px] h-[450px] text-white font-sans">
      {/* 배경 이미지 */}
      <img
        src="/pokemon_bg.png"
        alt="카드 배경"
        // className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 포켓몬 이미지 (위쪽 원에 들어가도록) */}
      {/* <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10"> */}
      <div className="absolute top-6 left-13">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png"
          alt="Mega Venusaur"
          width={200}
        />
      </div>

      {/* 설명 영역 (카드 하단 박스 안쪽) */}
      <div className="absolute bottom-0 left-0 px-6 z-10 w-full h-[200px]">
        {/* 번호 + 이름 */}
        <p className="text-lg text-gray-300 mt-2">No.0003</p>
        <h2 className="text-2xl font-bold text-white mt-8">Mega Venusaur</h2>

        {/* 타입 */}
        <div className="flex gap-4 w-full mt-10">
          <span className="bg-green-500 py-2 rounded-full text-md font-semibold w-1/2 flex justify-center items-center">
            Grass
          </span>
          <span className="bg-green-500 py-2 rounded-full text-md font-semibold w-1/2 flex justify-center items-center">
            Poison
          </span>
        </div>
      </div>
    </div>
  );
}
