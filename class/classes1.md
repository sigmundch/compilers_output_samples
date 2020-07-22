# Classes and constructors

```dart
class Base {
  int count = 0;
  Set<String> colours = {};
  String name;
  Base(this.name) {
    assert(name != "");
  }
}
```

## dart2js

A generative constructor has several steps which are all collected into a
_generative constructor factory_:

- Evaluates the initializers up the inheritance chain.
- Allocates an instance with the initializer values.
- Calls the constructor bodies back down the inheritance chain. The constructor
  bodies can access `this`, so are implemented like specially named instance
  methods.

```js
  K = {
    Base$: function($name) {
      var t1 = new K.Base(P.LinkedHashSet_LinkedHashSet$_empty(type$.String), $name);
      t1.Base$1($name);
      return t1;
    },
    // The JavaScript class is the 'allocator'.
    Base: function Base(t0, t1) {
      this.count = 0; // Trivial initializer.
      this.colours = t0;
      this.name = t1;
    },

...
  K.Base.prototype = {
    Base$1: function($name) {  // Constructor body 'method'.
      H.assertHelper(this.name !== "");
    }
    // Instance methods of Base would go here.
  };

  ...
  (function inheritance() {
    ...
    // The prototype chains are linked in ES5 style inheritance.
    _inheritMany(P.Object, [..., K.Base, ...]);
    ...
  })();
```

Some of the initializer values are pushed into the allocator - e.g. `Base.count`
is initialized directly to zero. This is done only for trivial values to ensure
that the JavaScript constructor is very simple and makes no reference to outside
code. This ensures that the constructor is always well optimized by the JIT and
never deoptimized due to something changing in its environment.

## ddc
```js
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
```

# Inheritance

Lets add a class that extends `Base`:
```dart
bool globalA = true;

class Extends extends Base {
  bool fieldA;
  Extends(String name)
      : fieldA = globalA,
        super('extends $name') {
    assert(colours.isEmpty);
    assert(name != this.name);
  }
}
```

## dart2js

The new class has a generative constructor factory
- Evaluates the initializers up the inheritance chain, so the access to
  `globalA` and the string interpolation happen first, before creating the Set.
- Allocates an instance with the initializer values.
- Calls the constructor bodies back down the inheritance chain, so `Base$1` is
  called before `Extends$`.

```js
  K = {
    ...
    Extends$: function($name) {
      var t1 = $.globalA,
        t2 = "extends " + $name;
      t1 = new K.Extends(t1, P.LinkedHashSet_LinkedHashSet$_empty(type$.String), t2);
      t1.Base$1(t2);
      t1.Extends$1($name);
      return t1;
    },
    Extends: function Extends(t0, t1, t2) {
      var _ = this;
      _.fieldA = t0;
      _.count = 0;
      _.colours = t1;
      _.name = t2;
    }

  ...
  K.Extends.prototype = {
    Extends$1: function($name) {
      var t1 = this.colours;
      H.assertHelper(t1.get$isEmpty(t1));
      H.assertHelper($name !== this.name);
    }
  };
  ...
  (function inheritance() {
    ...
    _inherit(K.Extends, K.Base);
    ...
  })();
```

Notes:
- The allocator function for `Extends` includes all the fields from both
  classes. JavaScript is too fluid for there to be much performance benefit from
  trying to share the code of the base class initialization.

## ddc

```js
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
```