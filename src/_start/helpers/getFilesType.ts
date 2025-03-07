import wretch from "wretch";
import {
  getCategoryQuery,
  getDepartmentQuery,
  getSourceQuery,
} from "./sideBarQueries";

export const getFilesType = async (item: string, id: string) => {
  try {
    let url;

    // Construct the URL based on the 'item' and 'id' parameters
    switch (item) {
      case "cat":
        url = `${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?category=${id}&groupBy=type`;
        break;
      case "dep":
        url = `${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?department=${id}&groupBy=type`;
        break;
      case "src":
        url = `${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?source=${id}&groupBy=type`;
        // url = `${process.env.REACT_APP_API_ENDPOINT}v2/api/alexandrias/getAll?source=${id}`;
        break;
      default:
        throw new Error("Invalid item type");
    }

    // console.log("Fetching data from: ", url);

    // Fetch data from the constructed URL
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse and return the response as JSON
    const data = await response.json();
    return data.body.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

