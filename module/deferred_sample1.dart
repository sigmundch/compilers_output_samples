import 'hello_world.dart' deferred as foo;

main() async {
  await foo.loadLibrary();
  foo.main();
}
