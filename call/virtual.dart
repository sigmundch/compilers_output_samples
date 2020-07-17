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

