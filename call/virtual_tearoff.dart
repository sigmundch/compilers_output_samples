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

