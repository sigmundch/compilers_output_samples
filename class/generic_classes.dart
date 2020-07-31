class Base<T> {
  Type extractGenericArg = T;
}

bool globalA = true;

class Extends<T> extends Base<T> {
  Type genericInArg(T value) {
    // Requires a type check of value.
    return value.runtimeType;
  }

  Type foo<S extends T>() {
    // Requires a bounds check of S.
    return S;
  }
}

dynamic confuse(x) => x;

main() {
  confuse("");
  confuse(null);
  var base = Base<String>();
  var extendsBase = Extends<num>();

  print(base.extractGenericArg);
  print(extendsBase.extractGenericArg);
  print(extendsBase.genericInArg(confuse(42)));
  print(extendsBase.foo<int>());
}
