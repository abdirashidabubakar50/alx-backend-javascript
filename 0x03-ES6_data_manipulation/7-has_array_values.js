export default function hasValuesFromArray(set, array) {
  const Exists = array.every((element) => set.has(element));
  return Exists;
}
