main() {
  var message = 'change me!';
  var greeting = 'good day';

  /// Reading enclosed variable: [greeting].
  /// Writing enclosed variable: [message].
  var localMethod = (String foo) {
    message = '$greeting $foo';
  };

  print(message);

  localMethod('sunshine');
  print(message);

  greeting = 'good night';
  localMethod('moon');
  print(message);
}
