import "dart:html";

class Other {
  // Mirrors the signature of Element.createFragment (https://api.dart.dev/stable/2.5.0/dart-html/Element/createFragment.html)
  createFragment(html, {validator, treeSanitizer}) {
    int result = 0;
    result += validator == null ? 0 : 2;
    result += treeSanitizer == null ? 0 : 1;
    return result;
  }
}

@pragma('dart2js:noInline')
bool wontTell(bool x) => x;

@pragma('dart2js:noInline')
test(thing) {
  print(thing.createFragment(null));
}

main() {
  dynamic thing = wontTell(true) ? new Other() : new DivElement();
  test(thing);
}
