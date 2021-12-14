export function getObjectPropertyValueByKey(obj: any, key: string): any | undefined {
  const map = new Map(Object.entries(obj));
  if (obj.hasOwnProperty(key) && map) {
    return map.get(key);
  }
}