@pragma('dart2js:noInline')
void foo(int value, String message) {}

main() {
  foo(42, 'hi');
}

