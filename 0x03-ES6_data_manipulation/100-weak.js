export const weakMap = new WeakMap();
let counter = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, counter);
  counter += 1;
  const callCount = weakMap.get(endPoint);
  if (callCount >= 5) {
    throw Error('Endpoint load is high');
  }
}
