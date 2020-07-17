
## Literal declaration

```dart
@JS()
library foo;

import 'package:js/js.dart';

@JS()
@anonymous
class A{
  external int a;
  external int b;
  external String c;

  external factory A({int a, int b, String c});
}
```

## Class creation

```dart
main() {
  new A(a: 3, b: 2, c: 'hi');
}
```

### dart2js
```js
main: function() {
  ({a: 3, b: 2, c: "hi"});
},
```

### ddc
```js
literal_create.main = function main() {
  ({a: 3, b: 2, c: "hi"});
};
```

## Reading a value
```dart
@JS()
external A get value;

main() {
  print(value.a);
}
```


### dart2js
```js
G = {
  main: function() {
    P.print(J.get$a$x(self.value));
  },
},
// ...
J = {
  get$a$x: function(receiver) {
    return J.getInterceptor$x(receiver).get$a(receiver);
  },
}
// ...
J.JavaScriptObject.prototype = {
  toString$0: function(receiver) {
    return String(receiver);
  },
  get$a: function(obj) {
    return obj.a;
  }
};
```

### ddc
``js
literal_read.main = function main() {
  core.print(dart.global.value.a);
};
```
