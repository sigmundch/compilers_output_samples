define(['dart_sdk'], (function load__simple_call(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var simple_call = Object.create(dart.library);
  var $text = dartx.text;
  var $append = dartx.append;
  const CT = Object.create(null);
  simple_call.main = function main() {
    let div = html.DivElement.new();
    div[$text] = "some text here";
    dart.nullCheck(html.document.body)[$append](div);
  };
  dart.trackLibraries("simple_call", {
    "org-dartlang-app:/simple_call.dart": simple_call
  }, {
  }, null);
  // Exports:
  return {
    simple_call: simple_call
  };
}));

//# sourceMappingURL=simple_call.js.map
