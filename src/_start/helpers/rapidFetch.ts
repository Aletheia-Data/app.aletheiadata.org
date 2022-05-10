import wretch, { Wretcher } from "wretch";

// custom fetch
export const rapidFetcher = (): Wretcher => {
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  return wretch()
    .url("https://aletheia2.p.rapidapi.com/v1")
    .headers({
      "content-type": "application/json",
      "x-rapidapi-host": "aletheia2.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    })
    .resolve((_) => _.fetchError((error) => console.log(error)));
};
