define(['dart_sdk'], (function load__intercepted_dynamic(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var intercepted_dynamic = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:/intercepted_dynamic.dart";
  intercepted_dynamic.Other = class Other extends core.Object {
    createFragment(html, opts) {
      let validator = opts && 'validator' in opts ? opts.validator : null;
      let treeSanitizer = opts && 'treeSanitizer' in opts ? opts.treeSanitizer : null;
      let result = 0;
      result = result + (validator == null ? 0 : 2);
      result = result + (treeSanitizer == null ? 0 : 1);
      return result;
    }
  };
  (intercepted_dynamic.Other.new = function() {
    ;
  }).prototype = intercepted_dynamic.Other.prototype;
  dart.addTypeTests(intercepted_dynamic.Other);
  dart.addTypeCaches(intercepted_dynamic.Other);
  dart.setMethodSignature(intercepted_dynamic.Other, () => ({
    __proto__: dart.getMethods(intercepted_dynamic.Other.__proto__),
    createFragment: dart.fnType(dart.dynamic, [dart.dynamic], {treeSanitizer: dart.dynamic, validator: dart.dynamic}, {})
  }));
  dart.setLibraryUri(intercepted_dynamic.Other, L0);
  intercepted_dynamic.wontTell = function wontTell(x) {
    if (x == null) dart.nullFailed(L0, 14, 20, "x");
    return x;
  };
  intercepted_dynamic.test = function test(thing) {
    core.print(dart.dsend(thing, 'createFragment', [null]));
  };
  intercepted_dynamic.main = function main() {
    let thing = dart.test(intercepted_dynamic.wontTell(true)) ? new intercepted_dynamic.Other.new() : html.DivElement.new();
    intercepted_dynamic.test(thing);
  };
  dart.trackLibraries("intercepted_dynamic", {
    "org-dartlang-app:/intercepted_dynamic.dart": intercepted_dynamic
  }, {
  }, null);
  // Exports:
  return {
    intercepted_dynamic: intercepted_dynamic
  };
}));

//# sourceMappingURL=intercepted_dynamic.js.map
