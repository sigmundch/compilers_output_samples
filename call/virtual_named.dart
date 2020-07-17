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

