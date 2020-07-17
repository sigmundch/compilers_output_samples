class MyClass {
  @pragma('dart2js:noInline')
  void add(int value) {}
}

@pragma('dart2js:noInline')
confuse(x) => x;

main() {
  confuse([]);
  var instance = confuse(MyClass());
  instance.add(1);
}

