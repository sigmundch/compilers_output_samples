@JS()
library foo;

import 'package:js/js.dart';

@JS()
@anonymous
class A {
  external int a;
  external int b;
  external String c;

  external factory A({int a, int b, String c});
}

@JS()
external A get value;

main() {
  print(value.a);
}
