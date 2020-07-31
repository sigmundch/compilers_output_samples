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

@JS()
external eval(String code);

@JS()
external A get value;

@JS()
external dynamic get value2;

main() {
  eval('''
  window.A = function(x) {
    this.a = x;
    this.b = x + 1;
    this.c = "hi";
  };

  window.value = new A(1);
  window.value2 = new A(2);
  ''');

  new A(3);
  print(value.a);
  print(value2.b);
}
