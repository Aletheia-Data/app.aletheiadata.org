export interface IAppBasic {
  title: string;
  docType: string;
  description: string;
  docSource: string;
  sourceId: string;
  newSource?: {
    name?: string;
    description?: string;
    url?: string;
  };
  issuerId: string;
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

export type TAppFramework = "HTML5" | "ReactJS" | "Angular" | "Vue";

export interface IAppDatabase {
  databaseName: string;
  sourceId: "MySQL" | "Firebase" | "DynamoDB";
}

export type TAppStorage = "Basic Server" | "AWS" | "Google";

export interface ICreateAppData {
  appBasic: IAppBasic;
  appFramework: TAppFramework;
  appDatabase: IAppDatabase;
  appStorage: TAppStorage;
}

export const defaultCreateAppData: ICreateAppData = {
  appBasic: {
    title: "",
    docType: "",
    description: "",
    docSource: "",
    sourceId: "",
    newSource: {
      name: "",
      description: "",
      url: "",
    },
    issuerId: "",
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
  appFramework: "HTML5",
  appDatabase: { databaseName: "db_name", sourceId: "MySQL" },
  appStorage: "Basic Server",
};
