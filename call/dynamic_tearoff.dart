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

