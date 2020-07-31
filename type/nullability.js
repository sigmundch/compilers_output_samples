'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var nullability = Object.create(dart.library);
var legacy_lib = Object.create(dart.library);
var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
const CT = Object.create(null);
nullability.main = function main() {
  let s = null;
  core.print(StringN().is(s));
  core.print(legacy_lib.isLegacyString(s));
  core.print(typeof s == 'string');
  core.print(intN().is(s));
  s = "Hello World";
  core.print(StringN().is(s));
  core.print(typeof s == 'string');
  core.print(legacy_lib.isLegacyString(s));
  core.print(intN().is(s));
};
legacy_lib.isLegacyString = function isLegacyString(s) {
  return StringL().is(s);
};
dart.trackLibraries("nullability", {
  "org-dartlang-app:/type/nullability.dart": nullability,
  "org-dartlang-app:/type/legacy_lib.dart": legacy_lib
}, {
}, null);
// Exports:
exports.type__nullability = nullability;
exports.type__legacy_lib = legacy_lib;

//# sourceMappingURL=nullability.js.map
