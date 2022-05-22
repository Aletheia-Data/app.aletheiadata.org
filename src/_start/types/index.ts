/* eslint-disable camelcase */

export enum StatusType {
  under_review = "under_review",
  on_line = "on_line",
  blocked = "blocked",
  broken = "broken",
}

export enum FormatType {
  csv = "csv",
  xls = "xls",
  xlsx = "xlsx",
  pdf = "pdf",
  ods = "ods",
  other = "other",
}

export interface Aletheia {
  id: string;
  proof: {
    id: string;
    url: string;
  };
}

export interface File {
  id: string;
  url: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  website: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface Source {
  url: string;
  id: string;
  name: string;
}

export interface Alexandrias {
  title: string;
  description: string;
  status: string;
  cid: string;
  type: string;
  aletheias: [Aletheia];
}

export interface Record {
  id: string;
  cid: string;
  description: string;
  status: StatusType;
  title: string;
  name?: string;
  updatedAt?: string;
  type: FormatType;
  aletheias: [Aletheia];
  alexandrias: [Alexandrias];
  file: [File];
  department: Department;
  category: Category;
  api_endpoint: string;
  source_url: string;
  wallet_address: string;
  source: Source;
  website: string;
  url: string;
  api_enabled: boolean;
}

export interface Deal {
  activation: string;
  created: string;
  dataCid: string;
  dataModelSelector: string;
  dealId: number;
  expiration: string;
  pieceCid: string;
  status: string;
  storageProvider: string;
  updated: string;
}

export interface Pin {
  peerId: string;
  peerName: string;
  region?: string;
  status: string;
  updated: string;
}
