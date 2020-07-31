# Generic Classes

```dart
class Base<T> {
  Type extractGenericArg = T;
}

bool globalA = true;

class Extends<T> extends Base<T> {
  Type genericInArg(T value) {
    // Requires a type check of value.
    return value.runtimeType;
  }

  Type foo<S extends T>() {
    // Requires a bounds check of S.
    return S;
  }
}

...

main() {
  var base = Base<String>();
  var extendsBase = Extends<num>();

  print(base.extractGenericArg);
  print(extendsBase.extractGenericArg);
  print(extendsBase.genericInArg(confuse(42)));
  print(extendsBase.foo<int>());
}
```


## ddc

```js
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
```

## dart2js

```js
  D = {
    Base$: function($T) {
      return new D.Base(H.createRuntimeType($T), $T._eval$1("Base<0>"));
    },
    Extends$: function($T) {
      return new D.Extends(H.createRuntimeType($T), $T._eval$1("Extends<0>"));
    },
    main: function() {
      var base, extendsBase;
      D.confuse("");
      D.confuse(null);
      base = D.Base$(type$.String);
      extendsBase = D.Extends$(type$.num);
      P.print(base.extractGenericArg);
      P.print(extendsBase.extractGenericArg);
      P.print(extendsBase.genericInArg$1(H._asNum(D.confuse(42))));
      P.print(extendsBase.foo$1$0(type$.int));
    },
    Base: function Base(t0, t1) {
      this.extractGenericArg = t0;
      this.$ti = t1;
    },
    Extends: function Extends(t0, t1) {
      this.extractGenericArg = t0;
      this.$ti = t1;
    }
  };

  ...
  D.Base.prototype = {};
  D.Extends.prototype = {
    genericInArg$1: function(value) {
      return J.get$runtimeType$(this.$ti._precomputed1._as(value));
    },
    foo$1$0: function($S) {
      H.checkTypeBound($S, this.$ti._precomputed1, "S", "foo");
      return H.createRuntimeType($S);
    }
  };
  ...
  _inherit(D.Extends, D.Base);

  ...
  H._Universe_addRules(init.typeUniverse, JSON.parse('{"JSBool":{"bool":[]},"JSArray":{"Iterable":["1"]},"JSUnmodifiableArray":{"JSArray":["1"],"Iterable":["1"]},"JSNumber":{"num":[]},"JSInt":{"int":[],"num":[]},"JSDouble":{"num":[]},"JSString":{"String":[]},"_Type":{"Type":[]},"double":{"num":[]},"int":{"num":[]},"Extends":{"Base":["1"]}}'));
```
