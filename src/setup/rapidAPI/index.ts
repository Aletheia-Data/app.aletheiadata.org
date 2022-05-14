import config from "setup/config";

const initialized = (queryUrl: string, method: string) => {
  return {
    method: method,
    headers: {
      "X-RapidAPI-Host": config.rapidAPI.endpoint,
      "X-RapidAPI-Key": config.rapidAPI.key,
    },
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function get(queryUrl: string, params: any) {
  try {
    const url = new URL(`${config.rapidAPI.endpoint}${queryUrl}`);

    const options: any = initialized(queryUrl, "GET");

    if (params && Object.keys(params).length > 0) {
      for (const property in params) {
        url.searchParams.append(property, params[property]);
      }
    }

    console.log("calling Rapid API: ", options);

    return fetch(url.href, options).then((response) => response);
  } catch (error) {
    console.error(error);

    return error;
  }
}

export default {
  get,
};
