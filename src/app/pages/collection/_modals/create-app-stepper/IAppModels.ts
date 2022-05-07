export interface IAppBasic {
  title: string;
  docType: string;
}

export type TAppFramework = "HTML5" | "ReactJS" | "Angular" | "Vue";

export interface IAppDatabase {
  databaseName: string;
  databaseSolution: "MySQL" | "Firebase" | "DynamoDB";
}

export type TAppStorage = "Basic Server" | "AWS" | "Google";

export interface ICreateAppData {
  appBasic: IAppBasic;
  appFramework: TAppFramework;
  appDatabase: IAppDatabase;
  appStorage: TAppStorage;
}

export const defaultCreateAppData: ICreateAppData = {
  appBasic: { title: "", docType: "" },
  appFramework: "HTML5",
  appDatabase: { databaseName: "db_name", databaseSolution: "MySQL" },
  appStorage: "Basic Server",
};
