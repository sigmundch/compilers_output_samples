# Closures

```dart
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
```

## dart2js

```js
// TODO
```

## ddc
```js
let message = "change me!";
let greeting = "good day";
let localMethod = dart.fn(foo => {
  message = dart.str(greeting) + dart.str(" ") + dart.str(foo);
}, StringToNullN());
core.print(message);
localMethod("sunshine");
core.print(message);
greeting = "good night";
localMethod("moon");
core.print(message);
```
