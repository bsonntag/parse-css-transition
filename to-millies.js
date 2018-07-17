
function toMillies(value) {
  if (!value) {
    return;
  }

  var isMillies = value.endsWith('ms');

  return parseFloat(value) * (isMillies ? 1 : 1000);
}

module.exports = toMillies;
