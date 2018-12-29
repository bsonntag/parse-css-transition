"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function toMillies(value) {
  if (!value) {
    return;
  }

  var isMillies = value.endsWith('ms');
  return parseFloat(value) * (isMillies ? 1 : 1000);
}

var _default = toMillies;
exports.default = _default;