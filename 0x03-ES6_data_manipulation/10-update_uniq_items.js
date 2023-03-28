export default function updateUniqueItems(mapper) {
  if (mapper instanceof Map) {
    mapper.forEach((value, key) => {
      if ((value) === 1) mapper.set(key, 100);
    });
    return mapper;
  }
  throw Error('Cannot process');
}
