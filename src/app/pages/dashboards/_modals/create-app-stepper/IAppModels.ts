export interface IAppBasic {
  title: string;
  docType: string;
  description: string;
  source: string;
  issuer: string;
  fileUploaded: any;
  proof: any;
  takenProof: boolean;
  owner: string;
}

export type TAppFramework = "HTML5" | "ReactJS" | "Angular" | "Vue";

export interface IAppDatabase {
  databaseName: string;
  issuer: "MySQL" | "Firebase" | "DynamoDB";
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
    source: "",
    issuer: "",
    fileUploaded: "",
    proof: "",
    takenProof: false,
    owner: "",
  },
  appFramework: "HTML5",
  appDatabase: { databaseName: "db_name", issuer: "MySQL" },
  appStorage: "Basic Server",
};
