# Generic Classes

```dart
class Base<T> {
  @pragma('dart2js:noInline')
  Type extractGenericArg = T;
}

bool globalA = true;

class Extends<T> extends Base<T> {
  @pragma('dart2js:noInline')
  Type genericInArg(T value) {
    // Requires a type check of value.
    return value.runtimeType;
  }

  @pragma('dart2js:noInline')
  Type foo<S extends T>() {
    // Requires a bounds check of S.
    return S;
  }
}
```

## dart2js

```js
// TODO
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