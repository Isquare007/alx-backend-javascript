export default function cleanSet(set, sString) {
  if (typeof set !== 'object' || sString.length === 0 || typeof sString !== 'string') return '';
  let strin = '';
  for (const value of set) {
    if (value.startsWith(sString)) {
      const newStrin = value.slice(sString.length);
      strin += `${newStrin}-`;
    }
  }
  return strin.slice(0, -1);
}
