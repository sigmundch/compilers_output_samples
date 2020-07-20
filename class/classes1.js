'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const collection = dart_sdk.collection;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var classes1 = Object.create(dart.library);
var $isEmpty = dartx.isEmpty;
var LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
const CT = Object.create(null);
var L0 = "org-dartlang-app:/classes1.dart";
var count = dart.privateName(classes1, "Base.count");
var colours = dart.privateName(classes1, "Base.colours");
var name$ = dart.privateName(classes1, "Base.name");
classes1.Base = class Base extends core.Object {
  get count() {
    return this[count];
  }
  set count(value) {
    this[count] = value;
  }
  get colours() {
    return this[colours];
  }
  set colours(value) {
    this[colours] = value;
  }
  get name() {
    return this[name$];
  }
  set name(value) {
    this[name$] = value;
  }
};
(classes1.Base.new = function(name) {
  this[count] = 0;
  this[colours] = LinkedHashSetOfString().new();
  this[name$] = name;
  if (!(this.name !== "")) dart.assertFailed(null, L0, 6, 12, "name != \"\"");
}).prototype = classes1.Base.prototype;
dart.addTypeTests(classes1.Base);
dart.addTypeCaches(classes1.Base);
dart.setLibraryUri(classes1.Base, L0);
dart.setFieldSignature(classes1.Base, () => ({
  __proto__: dart.getFields(classes1.Base.__proto__),
  count: dart.fieldType(core.int),
  colours: dart.fieldType(core.Set$(core.String)),
  name: dart.fieldType(core.String)
}));
var fieldA = dart.privateName(classes1, "Extends.fieldA");
classes1.Extends = class Extends extends classes1.Base {
  get fieldA() {
    return this[fieldA];
  }
  set fieldA(value) {
    this[fieldA] = value;
  }
};
(classes1.Extends.new = function(name) {
  this[fieldA] = classes1.globalA;
  classes1.Extends.__proto__.new.call(this, dart.str("extends ") + dart.str(name));
  if (!dart.test(this.colours[$isEmpty])) dart.assertFailed(null, L0, 17, 12, "colours.isEmpty");
  if (!(name != this.name)) dart.assertFailed(null, L0, 18, 12, "name != this.name");
}).prototype = classes1.Extends.prototype;
dart.addTypeTests(classes1.Extends);
dart.addTypeCaches(classes1.Extends);
dart.setLibraryUri(classes1.Extends, L0);
dart.setFieldSignature(classes1.Extends, () => ({
  __proto__: dart.getFields(classes1.Extends.__proto__),
  fieldA: dart.fieldType(core.bool)
}));
classes1.main = function main() {
  let t1, t0;
  core.print(new classes1.Base.new("Freddie"));
  core.print(new classes1.Extends.new("Ella"));
  core.print((t0 = new classes1.Extends.new("June"), t1 = t0.count, t0.count = dart.notNull(t1) + 1, t1));
  classes1.globalA = !dart.test(classes1.globalA);
  core.print(new classes1.Extends.new("June").fieldA);
};
dart.defineLazy(classes1, {
  /*classes1.globalA*/get globalA() {
    return true;
  },
  set globalA(_) {}
}, false);
dart.trackLibraries("classes1", {
  "org-dartlang-app:/classes1.dart": classes1
}, {
}, null);
// Exports:
exports.classes1 = classes1;

//# sourceMappingURL=classes1.js.map
