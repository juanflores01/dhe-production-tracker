export interface Movie {
  id: number;
  studio: string;
  name: string;
  territory: string;
  streetdate: string;
  status: string;
  vamid: number;
  vam: Vam[];
  milestones: Milestones[];
}

export interface Vam {
  vamid: number;
  id: number;
  group: string;
  name: string;
  type: string;
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

export interface Milestones {
  // production milestones, ie dates, statuses
  id: number;
  sku: string;
  qavendor: string;
  qastatus: string;
  portal: string;
  portalstatus: string;
  release: string;
  releasestatus: string;
}

export interface Packaging {
  id: number;
  marketingCopy: string;
  metadata: string;
  menuAudio: string;
  backgroundImage: string;
  thumbnail: string;
}

export interface Sources {
  id: number;
  name: string;
}

export interface Contacts {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}
