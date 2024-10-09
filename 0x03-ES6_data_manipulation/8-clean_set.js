export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const matchingvalues = [];

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      matchingvalues.push(value.slice(startString.length));
    }
  });

  return matchingvalues.join('-');
}
