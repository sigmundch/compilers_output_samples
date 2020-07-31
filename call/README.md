# Samples of calling conventions

### Static call
```dart
@pragma('dart2js:noInline')
void foo(int value, String message) {}

main() {
  foo(42, 'hi');
}
```


ddc:
```js
$static.foo = function foo(value, message) {
};
$static.main = function main() {
  $static.foo(42, "hi");
};
```

dart2js:
```js
foo: function(value, message) {
},
main: function() {
  Q.foo(42, "hi");
}
```

### Virtual call
```dart
class MyClass {
  @pragma('dart2js:noInline')
  void foo(int value, String message) {}
}

main() {
  var i = 42;
  dynamic s = 'hello world';
  var instance = MyClass();
  instance.foo(i, s);
}

```

ddc:
```js
virtual.MyClass = class MyClass extends core.Object {
  foo(value, message) {
  }
};
dart.setMethodSignature(virtual.MyClass, () => ({
  __proto__: dart.getMethods(virtual.MyClass.__proto__),
  foo: dart.fnType(dart.void, [core.int, core.String])
}));
...
virtual.main = function main() {
  let i = 42;
  let s = "hello world";
  let instance = new virtual.MyClass.new();
  instance.foo(i, core.String.as(s));
};
```

dart2js:
```js
  E = {
    MyClass$: function() {
      return new E.MyClass();
    },
    main: function() {
      E.MyClass$().foo$2(42, "hello world");
    },
    MyClass: function MyClass() {
    }
  };
  E.MyClass.prototype = {
    foo$2: function(value, message) {
      H._asInt(value);
      H._asString(message);
    }
  };
```

### Virtual call with optional positional parameters
```dart
class MyClass {
  @pragma('dart2js:noInline')
  void foo(int value, [String message = 'hi']) => print('$value $message');
}

main() {
  var i = 42;
  var instance = MyClass();
  instance.foo(i);
  instance.foo(i, "b");
}

```


ddc:
```js
```

dart2js:
```js
```

### Virtual call with named parameters
```dart
class MyClass {
  @pragma('dart2js:noInline')
  void foo(int value, {String message = 'hi', String also = 'b'}) => print('$value $message $also');
}

main() {
  var i = 42;
  var instance = MyClass();
  instance.foo(i);
  instance.foo(i, message:'q');
  instance.foo(i, also:'q');
}

```


ddc:
```js
```

dart2js:
```js
```

### Virtual tearoff
```dart
class MyClass {
  @pragma('dart2js:noInline')
  void foo(int value, String message) {}
}

@pragma('dart2js:noInline')
confuse(x) => x;

main() {
  var i = 42;
  dynamic s = 'hello world';
  var instance = MyClass();
  var foo = instance.foo;
  foo(i, s);
}
```


ddc:
```js
```

dart2js:
```js
```

###  Dynamic call

```dart
class MyClass {
  @pragma('dart2js:noInline')
  void foo(int value, String message) {}
}

class MyClass2 {
  @pragma('dart2js:noInline')
  void foo(int value, String message) {}
}

@pragma('dart2js:noInline')
confuse(x) => x;

main() {
  confuse(MyClass2());
  var i = 42;
  dynamic s = 'hello world';
  var instance = confuse(MyClass());
  instance.foo(i, s);
}

```


ddc:
```js
dynamic.MyClass = class MyClass extends core.Object {
  foo(value, message) {
  }
};
dynamic.MyClass2 = class MyClass2 extends core.Object {
  foo(value, message) {
  }
};
dynamic.main = function main() {
  dynamic.confuse(new dynamic.MyClass2.new());
  let i = 42;
  let s = "hello world";
  let instance = dynamic.confuse(new dynamic.MyClass.new());
  dart.dsend(instance, 'foo', [i, s]);
};
```

dart2js:
```js
  B = {
    MyClass$: function() {
      return new B.MyClass();
    },
    MyClass2$: function() {
      return new B.MyClass2();
    },
    confuse: function(x) {
      return x;
    },
    main: function() {
      B.confuse(B.MyClass2$());
      B.confuse(B.MyClass$()).foo$2(42, "hello world");
    },
    MyClass: function MyClass() {
    },
    MyClass2: function MyClass2() {
    }
  };
  B.MyClass.prototype = {
    foo$2: function(value, message) {
      H._asInt(value);
      H._asString(message);
    }
  };
  B.MyClass2.prototype = {
    foo$2: function(value, message) {
      H._asInt(value);
      H._asString(message);
    }
  };
```

###  Dynamic intercepted call

```dart
class MyClass {
  @pragma('dart2js:noInline')
  void add(int value) {}
}

@pragma('dart2js:noInline')
confuse(x) => x;

main() {
  confuse([]);
  var instance = confuse(MyClass());
  instance.add(1);
}
```


ddc:
```js
```

dart2js:
```js
```

### Dynamic tearoff call

```dart
class MyClass {
  @pragma('dart2js:noInline')
  void foo(int value, String message) {}
}

class MyClass2 {
  @pragma('dart2js:noInline')
  void foo(int value, String message) {}
}

@pragma('dart2js:noInline')
confuse(x) => x;

main() {
  confuse(MyClass2());
  var i = 42;
  dynamic s = 'hello world';
  var instance = confuse(MyClass());
  var foo = confuse(instance.foo);
  foo(i, s);
}

```

