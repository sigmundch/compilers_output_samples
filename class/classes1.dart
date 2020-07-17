class Base {
  int count = 0;
  Set<String> colours = {};
  String name;
  Base(this.name) {
    assert(name != "");
  }
}

bool globalA = true;

class Extends extends Base {
  bool fieldA;
  Extends(String name)
      : fieldA = globalA,
        super('extends $name') {
    assert(colours.isEmpty);
    assert(name != this.name);
  }
}

main() {
  print(Base('Freddie'));
  print(Extends('Ella'));
  // The following required to prevent elided field optimization:
  print(Extends('June').count++);
  globalA = !globalA;
  print(Extends('June').fieldA);
}
