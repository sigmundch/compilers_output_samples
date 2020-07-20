class Foo {
  final fin = 100;
  var _private = 100;
  static int stat = 100;

  void func() {
    print(fin + _private + Foo.stat);
  }
}

const constant = <int>{};
