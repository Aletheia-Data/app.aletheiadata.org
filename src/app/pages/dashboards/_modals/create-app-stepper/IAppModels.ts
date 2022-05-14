export interface PublishData {
  title: string;
  docType: string;
  description: string;
  categoryId: string;
  docSource: string;
  sourceId: string;
  sourceInfo?: {
    name?: string;
    description?: string;
    url?: string;
  };
  newSource?: {
    name?: string;
    description?: string;
    url?: string;
  };
  issuerId: string;
  issuerInfo?: {
    name?: string;
    description?: string;
    url?: string;
  };
  newIssuer?: {
    name?: string;
    description?: string;
    url?: string;
  };
  fileUploaded: any;
  proof: any;
  takenProof: boolean;
  owner: string;
}
export interface ICreateAppData {
  appBasic: PublishData;
}

export const defaultCreateAppData: ICreateAppData = {
  appBasic: {
    title: "",
    docType: "",
    description: "",
    categoryId: "",
    docSource: "",
    sourceId: "",
    sourceInfo: {
      name: "",
      description: "",
      url: "",
    },
    newSource: {
      name: "",
      description: "",
      url: "",
    },
    issuerId: "",
    issuerInfo: {
      name: "",
      description: "",
      url: "",
    },
    newIssuer: {
      name: "",
      description: "",
      url: "",
    },
    fileUploaded: "",
    proof: "",
    takenProof: false,
    owner: "",
  },
};
