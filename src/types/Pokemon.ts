/** @format */

export interface PokemonDetailResponse {
  id: number; // 포켓몬 ID
  name: string; // 포켓몬 이름
  height: number; // 포켓몬 키 (데시미터 단위)
  weight: number; // 포켓몬 몸무게 (헥토그램 단위)
  types: PokemonType[]; // 포켓몬 타입 리스트
  abilities: PokemonAbility[]; // 포켓몬 능력 리스트
}

export interface PokemonType {
  slot: number; // 타입의 슬롯 번호 (순서)
  type: {
    name: string; // 타입 이름 (예: grass, poison)
    url: string; // 타입 상세 정보 URL
  };
}

export interface PokemonAbility {
  is_hidden: boolean; // 숨겨진 능력 여부
  slot: number; // 능력의 슬롯 번호 (순서)
  ability: {
    name: string; // 능력 이름 (예: overgrow, chlorophyll)
    url: string; // 능력 상세 정보 URL
  };
}

// 포켓몬 리스트 API 응답 타입
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

// 특정 포켓몬 상세 정보 API 응답 타입
export interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}
