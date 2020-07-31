define(['dart_sdk'], (function load__hello_world(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var hello_world = Object.create(dart.library);
  const CT = Object.create(null);
  hello_world.main = function main() {
    core.print("Hello World");
  };
  dart.trackLibraries("hello_world", {
    "org-dartlang-app:/hello_world.dart": hello_world
  }, {
  }, null);
  // Exports:
  return {
    hello_world: hello_world
  };
}));

//# sourceMappingURL=hello_world.js.map
