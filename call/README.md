# Samples of calling conventions

### Static call
```dart
@pragma('dart2js:noInline')
void foo(int value, String message) {}

main() {
  foo(42, 'hi');
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

