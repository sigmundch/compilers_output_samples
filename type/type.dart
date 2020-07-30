class InterfaceType {}

class GenericType<T> {
  T genericFunction<S>(S s, T t) => t;
}

main() {
  var primitive = true;
  print(primitive is bool);

  var interface = InterfaceType();
  print(interface is InterfaceType);

  var generic = GenericType<int>();
  print(generic is GenericType<int>);

  var function = (String s) => s.length;
  print(function is int Function(String));

  var genericFunction = <T>(T t) => t;
  print(genericFunction is S Function<S>(S));
  print(generic.genericFunction is int Function<T>(T, int));
}
