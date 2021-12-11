export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: Flags;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  '2019': number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Translations {
  ara: Aym;
  ces: Aym;
  cym: Aym;
  deu: Aym;
  est: Aym;
  fin: Aym;
  fra: Aym;
  hrv: Aym;
  hun: Aym;
  ita: Aym;
  jpn: Aym;
  kor: Aym;
  nld: Aym;
  per: Aym;
  pol: Aym;
  por: Aym;
  rus: Aym;
  slk: Aym;
  spa: Aym;
  swe: Aym;
  urd: Aym;
  zho: Aym;
}

export interface Languages {
  aym: string;
  que: string;
  spa: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  PEN: PEN;
}

export interface PEN {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  aym: Aym;
  que: Aym;
  spa: Aym;
}

export interface Aym {
  official: string;
  common: string;
}