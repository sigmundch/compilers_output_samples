class Base<T> {
  @pragma('dart2js:noInline')
  Type extractGenericArg = T;
}

bool globalA = true;

class Extends<T> extends Base<T> {
  @pragma('dart2js:noInline')
  Type genericInArg(T value) {
    // Requires a type check of value.
    return value.runtimeType;
  }

  @pragma('dart2js:noInline')
  Type foo<S extends T>() {
    // Requires a bounds check of S.
    return S;
  }
}

@pragma('dart2js:noInline')
confuse(x) => x;

main() {
  var base = Base<String>();
  var extendsBase = Extends<num>();

  print(base.extractGenericArg);
  print(extendsBase.extractGenericArg);
  print(extendsBase.genericInArg(confuse(42)));
  print(extendsBase.foo<int>());
}
