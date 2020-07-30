import 'legacy_lib.dart';

main() {
  String? s = null;

  print(s is String?); // true
  print(isLegacyString(s)); // false
  print(s is String); // false
  print(s is int?); // true

  s = "Hello World";

  print(s is String?); // true
  print(s is String); // true
  print(isLegacyString(s)); // true
  print(s is int?); // false
}
