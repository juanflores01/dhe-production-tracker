export interface Movie {
  id: number;
  studio: string;
  name: string;
  territory: string;
  streetdate: string;
  status: string;
  vamid: number;
  vam: Vam;
}

export interface Vam {
  vamid: number;
  id: number;
  name: string;
  language: string;
  source: string;
  titlecard: string;
  legalcard: string;
  deliverable: string;
  proxy: string;
  itt: string;
  thumbnail: string;
  status: string;
}
