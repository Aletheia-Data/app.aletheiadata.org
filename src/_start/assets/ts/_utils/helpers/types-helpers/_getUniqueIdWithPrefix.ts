/**
 * Generates unique ID for give prefix.
 * @param {string} prefix Prefix for generated ID
 * @returns {boolean}
 */
export function getUniqueIdWithPrefix(prefix: string | undefined): string {
  const result = Math.floor(Math.random() * new Date().getTime()).toString();
  if (!prefix) {
    return result;
  }

  return `${prefix}${result}`;
}
