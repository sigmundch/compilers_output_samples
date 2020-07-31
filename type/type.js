'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var type = Object.create(dart.library);
var GenericTypeOfint = () => (GenericTypeOfint = dart.constFn(type.GenericType$(core.int)))();
var StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
var TToT = () => (TToT = dart.constFn(dart.gFnType(T => [T, [T]], T => [ObjectN()])))();
var TAndintToint = () => (TAndintToint = dart.constFn(dart.gFnType(T => [core.int, [T, core.int]], T => [ObjectN()])))();
const CT = Object.create(null);
var L0 = "org-dartlang-app:/type/type.dart";
type.InterfaceType = class InterfaceType extends core.Object {};
(type.InterfaceType.new = function() {
  ;
}).prototype = type.InterfaceType.prototype;
dart.addTypeTests(type.InterfaceType);
dart.addTypeCaches(type.InterfaceType);
dart.setLibraryUri(type.InterfaceType, L0);
const _is_GenericType_default = Symbol('_is_GenericType_default');
type.GenericType$ = dart.generic(T => {
  class GenericType extends core.Object {
    genericFunction(S, s, t) {
      T.as(t);
      return t;
    }
  }
  (GenericType.new = function() {
    ;
  }).prototype = GenericType.prototype;
  dart.addTypeTests(GenericType);
  GenericType.prototype[_is_GenericType_default] = true;
  dart.addTypeCaches(GenericType);
  dart.setMethodSignature(GenericType, () => ({
    __proto__: dart.getMethods(GenericType.__proto__),
    genericFunction: dart.gFnType(S => [T, [S, dart.nullable(core.Object)]], S => [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(GenericType, L0);
  return GenericType;
});
type.GenericType = type.GenericType$();
dart.addTypeTests(type.GenericType, _is_GenericType_default);
type.main = function main() {
  let primitive = true;
  core.print(typeof primitive == 'boolean');
  let $interface = new type.InterfaceType.new();
  core.print(type.InterfaceType.is($interface));
  let generic = new (GenericTypeOfint()).new();
  core.print(GenericTypeOfint().is(generic));
  let $function = dart.fn(s => {
    if (s == null) dart.nullFailed(L0, 17, 26, "s");
    return s.length;
  }, StringToint());
  core.print(StringToint().is($function));
  let genericFunction = dart.fn((T, t) => t, TToT());
  core.print(TToT().is(genericFunction));
  core.print(TAndintToint().is(dart.bind(generic, 'genericFunction')));
};
dart.trackLibraries("type", {
  "org-dartlang-app:/type/type.dart": type
}, {
}, null);
// Exports:
exports.type__type = type;

//# sourceMappingURL=type.js.map
