'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var generic_classes = Object.create(dart.library);
var $runtimeType = dartx.runtimeType;
var BaseOfString = () => (BaseOfString = dart.constFn(generic_classes.Base$(core.String)))();
var ExtendsOfnum = () => (ExtendsOfnum = dart.constFn(generic_classes.Extends$(core.num)))();
const CT = Object.create(null);
var L0 = "org-dartlang-app:/generic_classes.dart";
const _is_Base_default = Symbol('_is_Base_default');
var extractGenericArg = dart.privateName(generic_classes, "Base.extractGenericArg");
generic_classes.Base$ = dart.generic(T => {
  class Base extends core.Object {
    get extractGenericArg() {
      return this[extractGenericArg];
    }
    set extractGenericArg(value) {
      this[extractGenericArg] = value;
    }
  }
  (Base.new = function() {
    this[extractGenericArg] = dart.wrapType(T);
    ;
  }).prototype = Base.prototype;
  dart.addTypeTests(Base);
  Base.prototype[_is_Base_default] = true;
  dart.addTypeCaches(Base);
  dart.setLibraryUri(Base, L0);
  dart.setFieldSignature(Base, () => ({
    __proto__: dart.getFields(Base.__proto__),
    extractGenericArg: dart.fieldType(core.Type)
  }));
  return Base;
});
generic_classes.Base = generic_classes.Base$();
dart.addTypeTests(generic_classes.Base, _is_Base_default);
const _is_Extends_default = Symbol('_is_Extends_default');
generic_classes.Extends$ = dart.generic(T => {
  class Extends extends generic_classes.Base$(T) {
    genericInArg(value) {
      T.as(value);
      return dart.runtimeType(value);
    }
    foo(S) {
      dart.checkTypeBound(S, T, 'S');
      return dart.wrapType(S);
    }
  }
  (Extends.new = function() {
    Extends.__proto__.new.call(this);
    ;
  }).prototype = Extends.prototype;
  dart.addTypeTests(Extends);
  Extends.prototype[_is_Extends_default] = true;
  dart.addTypeCaches(Extends);
  dart.setMethodSignature(Extends, () => ({
    __proto__: dart.getMethods(Extends.__proto__),
    genericInArg: dart.fnType(core.Type, [dart.nullable(core.Object)]),
    foo: dart.gFnType(S => [core.Type, []], S => [T])
  }));
  dart.setLibraryUri(Extends, L0);
  return Extends;
});
generic_classes.Extends = generic_classes.Extends$();
dart.addTypeTests(generic_classes.Extends, _is_Extends_default);
generic_classes.confuse = function confuse(x) {
  return x;
};
generic_classes.main = function main() {
  generic_classes.confuse("");
  generic_classes.confuse(null);
  let base = new (BaseOfString()).new();
  let extendsBase = new (ExtendsOfnum()).new();
  core.print(base.extractGenericArg);
  core.print(extendsBase.extractGenericArg);
  core.print(extendsBase.genericInArg(core.num.as(generic_classes.confuse(42))));
  core.print(extendsBase.foo(core.int));
};
dart.defineLazy(generic_classes, {
  /*generic_classes.globalA*/get globalA() {
    return true;
  },
  set globalA(_) {}
}, false);
dart.trackLibraries("generic_classes", {
  "org-dartlang-app:/generic_classes.dart": generic_classes
}, {
}, null);
// Exports:
exports.generic_classes = generic_classes;

//# sourceMappingURL=generic_classes.js.map
