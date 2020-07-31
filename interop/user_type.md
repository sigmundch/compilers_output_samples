
```dart
@JS()
library foo;

import 'package:js/js.dart';
@JS()
class A{
  external int a;
  external int b;
  external String c;

  external factory A(int x);
}
```

## Class creation

```dart
A(3);
```

### ddc
```js
new dart.global.A(3);
```

### dart2js
```js
new self.A(3);
```

## Reading a value

```dart
@JS()
external A get value;

@JS()
external dynamic get value2;
...
print(value.a);
print(value2.b);
```

### ddc
```js
core.print(dart.global.value.a);
core.print(dart.dload(dart.global.value2, 'b'));

```

### dart2js
```js
  J.JavaScriptObject.prototype = {
    toString$0: function(receiver) {
      return String(receiver);
    },
    get$a: function(obj) {
      return obj.a;
    },
    get$b: function(obj) {
      return obj.b;
    }
  };

  ...
  P.print(J.get$a$x(self.value));
  P.print(J.get$b$x(self.value2));
```
