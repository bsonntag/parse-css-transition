var toMillies = require('./to-millies');

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function isTime(value) {
  return (/^-?(0?\.)?\d+m?s$/.test(value));
}

function parseSingleTransition(transition) {
  var _transition$split = transition.split(/\s+/),
      _transition$split2 = _slicedToArray(_transition$split, 4),
      name = _transition$split2[0],
      duration = _transition$split2[1],
      timingFunctionOrDelay = _transition$split2[2],
      delay = _transition$split2[3];

  if (isTime(timingFunctionOrDelay)) {
    return {
      delay: toMillies(timingFunctionOrDelay),
      duration: toMillies(duration),
      name: name
    };
  }

  return {
    delay: toMillies(delay),
    duration: toMillies(duration),
    name: name,
    timingFunction: timingFunctionOrDelay
  };
}

function parseCssTransition(transition) {
  return transition.split(',').map(function (value) {
    return value.trim();
  }).filter(function (value) {
    return value.length > 0;
  }).map(parseSingleTransition);
}

module.exports = parseCssTransition;
