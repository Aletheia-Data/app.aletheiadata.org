import wretch from "wretch";
import {
  getCategoryQuery,
  getDepartmentQuery,
  getSourceQuery,
} from "./sideBarQueries";

export const getFilesType = async (item: string, id: string) => {
  const query =
    item === "cat"
      ? getCategoryQuery(id)
      : item === "dep"
      ? getDepartmentQuery(id)
      : getSourceQuery(id);

  const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/graphql`;

  const stringQuery = JSON.stringify({
    query: query,
  });

  return wretch()
    .url(endpoint)
    .headers({
      "content-type": "application/json",
    })
    .body(stringQuery)
    .resolve((_) => _.fetchError((error: any) => console.log(error)))
    .post()
    .json();
};
