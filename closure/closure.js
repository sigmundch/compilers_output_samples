'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var closure = Object.create(dart.library);
var StringToNullN = () => (StringToNullN = dart.constFn(dart.fnType(core.Null, [core.String])))();
const CT = Object.create(null);
closure.main = function main() {
  let message = "change me!";
  let greeting = "good day";
  let localMethod = dart.fn(foo => {
    message = dart.str(greeting) + dart.str(" ") + dart.str(foo);
  }, StringToNullN());
  core.print(message);
  localMethod("sunshine");
  core.print(message);
  greeting = "good night";
  localMethod("moon");
  core.print(message);
};
dart.trackLibraries("closure", {
  "org-dartlang-app:/closure/closure.dart": closure
}, {
}, null);
// Exports:
exports.closure__closure = closure;

//# sourceMappingURL=closure.js.map
