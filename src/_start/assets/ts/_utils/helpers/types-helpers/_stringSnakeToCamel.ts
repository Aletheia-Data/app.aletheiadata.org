/* eslint-disable no-useless-escape */
export function stringSnakeToCamel(str: string): string {
  return str.replace(/(\-\w)/g, function (m) {
    return m[1].toUpperCase();
  });
}