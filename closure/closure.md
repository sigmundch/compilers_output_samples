# Closures


```dart
var message = 'change me!';
var greeting = 'good day';
var readonly = '!';

/// Reading enclosed variables: [greeting] and [readonly]
/// Writing enclosed variable: [message].
var localMethod = (String foo) {
  message = '$greeting $foo$readonly';
};

print(message);

localMethod('sunshine');
print(message);

greeting = 'good night';
localMethod('moon');
print(message);
```

## ddc

DDC represents Dart closures directly with JavaScript closures:
```js
closure.main = function main() {
  let message = "change me!";
  let greeting = "good day";
  let readonly = "!";
  let localMethod = dart.fn(foo => {
    message = dart.str(greeting) + dart.str(" ") + dart.str(foo) + dart.str(readonly);
  }, StringToNullN());
  core.print(message);
  localMethod("sunshine");
  core.print(message);
  greeting = "good night";
  localMethod("moon");
  core.print(message);
};
```

## dart2js

In dart2js closures are represented as classes:
```js
E.main_closure.prototype = {
  call$1: function(foo) {
    var t1;
    H._asString(foo);
    t1 = this._box_0;
    t1.message = H.S(t1.greeting) + " " + foo + H.S(this.readonly);
  },
  $signature: 0
};
```

Captured variables that are mutated are boxed (`message` and `greeting`) but final
variables don't need to be (see `readonly`).

A closure creation is a class allocation:

```js
main: function() {
  var localMethod,
    _s10_ = "change me!",
    t1 = {};
  t1.message = _s10_;
  t1.greeting = "good day";
  localMethod = new E.main_closure(t1);
  // ...
},

main_closure: function main_closure(t0, t1) {
  this._box_0 = t0;
  this.readonly = t1;
}

// ...
_inheritMany(H.Closure, [H.TearOffClosure, E.main_closure]);
```

A closure call is modeled like regular calls with the name `call`:
```js
main: function() {
      ...
      P.print(_s10_);
      localMethod.call$1("sunshine");
      P.print(t1.message);
      t1.greeting = "good night";
      localMethod.call$1("moon");
      P.print(t1.message);
    },

```
