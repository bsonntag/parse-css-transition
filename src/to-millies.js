
function toMillies(value) {
  if (!value) {
    return;
  }

  const isMillies = value.endsWith('ms');

  return parseFloat(value) * (isMillies ? 1 : 1000);
}

export default toMillies;
