var module = Object.create(dart.library);
export { module };
import { core, dart, dartx } from 'dart_sdk.js';
var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
const CT = Object.create(null);
var L0 = "dev-dart-app:/module.dart";
dart.defineLazy(CT, {
  get C0() {
    return C0 = dart.constSet(intL(), []);
  }
}, false);
var _private = dart.privateName(module, "_private");
var fin = dart.privateName(module, "Foo.fin");
module.Foo = class Foo extends core.Object {
  get fin() {
    return this[fin];
  }
  set fin(value) {
    super.fin = value;
  }
  func() {
    core.print(dart.notNull(this.fin) + dart.notNull(this[_private]) + dart.notNull(module.Foo.stat));
  }
};
(module.Foo.new = function() {
  this[fin] = 100;
  this[_private] = 100;
  ;
}).prototype = module.Foo.prototype;
dart.addTypeTests(module.Foo);
dart.addTypeCaches(module.Foo);
dart.setMethodSignature(module.Foo, () => ({
  __proto__: dart.getMethods(module.Foo.__proto__),
  func: dart.fnType(dart.void, [])
}));
dart.setLibraryUri(module.Foo, L0);
dart.setFieldSignature(module.Foo, () => ({
  __proto__: dart.getFields(module.Foo.__proto__),
  fin: dart.finalFieldType(core.int),
  [_private]: dart.fieldType(core.int)
}));
dart.defineLazy(module.Foo, {
  get stat() {
    return 100;
  },
  set stat(_) {}
}, false);
var C0;
dart.defineLazy(module, {
  get constant() {
    return C0 || CT.C0;
  }
}, false);
dart.trackLibraries("module", {
  "dev-dart-app:/module.dart": module
}, {
}, null);
