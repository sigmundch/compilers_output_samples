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

