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
virtual_optional.MyClass = class MyClass extends core.Object {
  foo(value, message = "hi") {
    return core.print(dart.str(value) + dart.str(" ") + dart.str(message));
  }
};
virtual_optional.main = function main() {
  let i = 42;
  let instance = new virtual_optional.MyClass.new();
  instance.foo(i);
  instance.foo(i, "b");
};
```

dart2js:
```js
  V = {
    MyClass$: function() {
      return new V.MyClass();
    },
    main: function() {
      var instance = V.MyClass$();
      instance.foo$1(42);
      instance.foo$2(42, "b");
    },
    MyClass: function MyClass() {
    }
  };
  V.MyClass.prototype = {
    foo$2: function(value, message) {
      H._asInt(value);
      H._asString(message);
      return P.print("" + value + " " + message);
    },
    foo$1: function(value) {
      return this.foo$2(value, "hi");
    }
  };
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
virtual_named.MyClass = class MyClass extends core.Object {
  foo(value, opts) {
    let message = opts && 'message' in opts ? opts.message : "hi";
    let also = opts && 'also' in opts ? opts.also : "b";
    return core.print(dart.str(value) + dart.str(" ") + dart.str(message) + dart.str(" ") + dart.str(also));
  }
};
virtual_named.main = function main() {
  let i = 42;
  let instance = new virtual_named.MyClass.new();
  instance.foo(i);
  instance.foo(i, {message: "q"});
  instance.foo(i, {also: "q"});
};
```

dart2js:
```js
  Y = {
    MyClass$: function() {
      return new Y.MyClass();
    },
    main: function() {
      var instance = Y.MyClass$();
      instance.foo$1(42);
      instance.foo$2$message(42, "q");
      instance.foo$2$also(42, "q");
    },
    MyClass: function MyClass() {
    }
  };

  Y.MyClass.prototype = {
    foo$3$also$message: function(value, also, message) {
      H._asInt(value);
      H._asString(message);
      H._asString(also);
      return P.print("" + value + " " + message + " " + also);
    },
    foo$1: function(value) {
      return this.foo$3$also$message(value, "b", "hi");
    },
    foo$2$message: function(value, message) {
      return this.foo$3$also$message(value, "b", message);
    },
    foo$2$also: function(value, also) {
      return this.foo$3$also$message(value, also, "hi");
    }
  };
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
virtual_tearoff.main = function main() {
  let i = 42;
  let s = "hello world";
  let instance = new virtual_tearoff.MyClass.new();
  let foo = dart.bind(instance, 'foo');
  foo(i, core.String.as(s));
};
```

dart2js:
```js
  M = {
    MyClass$: function() {
      return new M.MyClass();
    },
    main: function() {
      M.MyClass$().get$foo().call$2(42, "hello world");
    },
    MyClass: function MyClass() {
    }
  };
  M.MyClass.prototype = {
    foo$2: function(value, message) {
      H._asInt(value);
      H._asString(message);
    }
  };
  (function installTearOffs() {
    var _instance_2_u = hunkHelpers._instance_2u;
    _instance_2_u(M.MyClass.prototype, "get$foo", "foo$2", 0);
  })();
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
dynamic_intercepted.MyClass = class MyClass extends core.Object {
  add(value) {
  }
};
dart.setMethodSignature(dynamic_intercepted.MyClass, () => ({
  __proto__: dart.getMethods(dynamic_intercepted.MyClass.__proto__),
  add: dart.fnType(dart.void, [core.int])
}));
dynamic_intercepted.main = function main() {
  dynamic_intercepted.confuse([]);
  let instance = dynamic_intercepted.confuse(new dynamic_intercepted.MyClass.new());
  dart.dsend(instance, 'add', [1]);
};
```

dart2js:
```js
  G = {
    MyClass$: function() {
      return new G.MyClass();
    },
    confuse: function(x) {
      return x;
    },
    main: function() {
      G.confuse([]);
      J.add$1$a(G.confuse(G.MyClass$()), 1);
    },
    MyClass: function MyClass() {
    }
  }

  J = {
    ...
    add$1$a: function(receiver, a0) {
      return J.getInterceptor$a(receiver).add$1(receiver, a0);
    },
    getInterceptor$a: function(receiver) {
      if (receiver == null)
        return receiver;
      if (receiver.constructor == Array)
        return J.JSArray.prototype;
      return receiver;
    },
  }

  G.MyClass.prototype = {
    add$1: function(_, value) {
      H._asInt(value);
    }
  };

  J.JSArray.prototype = {
    ...
    add$1: function(receiver, value) {
      H._arrayInstanceType(receiver)._precomputed1._as(value);
      this.checkGrowable$1(receiver, "add");
      receiver.push(value);
    },
  }
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

ddc:
```js
dynamic_tearoff.main = function main() {
  dynamic_tearoff.confuse(new dynamic_tearoff.MyClass2.new());
  let i = 42;
  let s = "hello world";
  let instance = dynamic_tearoff.confuse(new dynamic_tearoff.MyClass.new());
  let foo = dynamic_tearoff.confuse(dart.dload(instance, 'foo'));
  dart.dcall(foo, [i, s]);
};
```

dart2js:
```js
  F = {
    MyClass$: function() {
      return new F.MyClass();
    },
    MyClass2$: function() {
      return new F.MyClass2();
    },
    confuse: function(x) {
      return x;
    },
    main: function() {
      F.confuse(F.MyClass2$());
      F.confuse(F.confuse(F.MyClass$()).get$foo()).call$2(42, "hello world");
    },
    MyClass: function MyClass() {
    },
    MyClass2: function MyClass2() {
    }
  };
  (function installTearOffs() {
    var _instance_2_u = hunkHelpers._instance_2u;
    _instance_2_u(F.MyClass.prototype, "get$foo", "foo$2", 0);
    _instance_2_u(F.MyClass2.prototype, "get$foo", "foo$2", 0);
  })();
```
