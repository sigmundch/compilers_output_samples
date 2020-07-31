# Types

```dart
class InterfaceType {}

class GenericType<T> {
  T genericFunction<S>(S s, T t) => t;
}

main() {
  var primitive = true;
  print(primitive is bool);

  var interface = InterfaceType();
  print(interface is InterfaceType);

  var generic = GenericType<int>();
  print(generic is GenericType<int>);

  var function = (String s) => s.length;
  print(function is int Function(String));

  var genericFunction = <T>(T t) => t;
  print(genericFunction is S Function<S>(S));
  print(generic.genericFunction is int Function<T>(T, int));
}
```

## dart2js

```js
// TODO
```

## ddc
```js
var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
var GenericTypeOfint = () => (GenericTypeOfint = dart.constFn(type.GenericType$(core.int)))();
var StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
var TToT = () => (TToT = dart.constFn(dart.gFnType(T => [T, [T]], T => [ObjectN()])))();
var SAndintToint = () => (SAndintToint = dart.constFn(dart.gFnType(S => [core.int, [S, core.int]], S => [ObjectN()])))();

/* ... */

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
```
