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

## dart2js

```js
    main: function() {
      var localMethod,
        _s10_ = "change me!",
        t1 = {};
      t1.message = _s10_;
      t1.greeting = "good day";
      localMethod = new E.main_closure(t1);
      P.print(_s10_);
      localMethod.call$1("sunshine");
      P.print(t1.message);
      t1.greeting = "good night";
      localMethod.call$1("moon");
      P.print(t1.message);
    },
    main_closure: function main_closure(t0) {
      this._box_0 = t0;
    }
    // ...
  E.main_closure.prototype = {
    call$1: function(foo) {
      var t1;
      H._asString(foo);
      t1 = this._box_0;
      t1.message = H.S(t1.greeting) + " " + foo;
    },
    $signature: 0
  };
    _inheritMany(H.Closure, [H.TearOffClosure, E.main_closure]);

```
