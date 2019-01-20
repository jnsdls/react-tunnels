"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueId;
function uniqueId() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}