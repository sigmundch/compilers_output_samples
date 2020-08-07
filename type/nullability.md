# Nullability

```dart
import 'legacy_lib.dart';

main() {
  String? s = null;

  print(s is String?); // true
  print(isLegacyString(s)); // false
  print(s is String); // false
  print(s is int?); // true

  s = "Hello World";

  print(s is String?); // true
  print(s is String); // true
  print(isLegacyString(s)); // true
  print(s is int?); // false
}


// From legacy_lib.dart
bool isLegacyString(dynamic s) => s is String;
```

## dart2js (NNBD weak mode)

```js
main: function() {                                                                                                                                        
  P.print(true);                                                                
  P.print(false);                                                               
  P.print(false);                                                               
  P.print(true);                                                             
  P.print(true);                                                             
  P.print(true);                                                             
  P.print(true);                                                             
  P.print(type$.nullable_int._is("Hello World"));                            
}
```

## ddc

```js
var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
const CT = Object.create(null);
nullability.main = function main() {
  let s = null;
  core.print(StringN().is(s));
  core.print(legacy_lib.isLegacyString(s));
  core.print(typeof s == 'string');
  core.print(intN().is(s));
  s = "Hello World";
  core.print(StringN().is(s));
  core.print(typeof s == 'string');
  core.print(legacy_lib.isLegacyString(s));
  core.print(intN().is(s));
};
legacy_lib.isLegacyString = function isLegacyString(s) {
  return StringL().is(s);
};
```
