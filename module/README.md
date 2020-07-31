# Modules

How is code organize into files?

## DDC module representations

### Overview of DDC module systems/formats
- es6/d8
  - The modules in this format will be peppered with "import" or "export" and other ES6 features
  - Doesn't handle cross-module renaming when modules have the same name but different paths
  - Used for the modular test suite
  - The "progenitor" module system from which other modules are derived
- common/node
  - Uses NPM modules
  - Used for some miscellaneous testing (on other infra?)
- amd/chrome
  - Uses RequireJS (sometimes called the require-js module system)
  - Usually the default
- ddc/legacy
  - Used in google3
  - External copy no longer updated
  - Supports JIT modules (link)
  - The module system we'd prefer to migrate to on all platforms
  - Allows the most control over module handling
  - Allows separate modules to be trivially concatenated

### Module format similarities
- Top-level objects/containers/initialization

```js
var module = Object.create(dart.library);
var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
var L0 = "dev-dart-app:/module.dart";
var _private = dart.privateName(module, "_private");
```

- Imports/Exports

```js
export { module };
import { core, dart, dartx } from 'dart_sdk.js';
```

- Misc. Logic

```js
dart.addTypeTests(module.Foo);
dart.defineLazy(module.SomeClass, {
  get someField() {
    return;
  },
  set someField(_) {}
}, false);
```

- Track libraries call
```js
dart.trackLibraries("module", {
"dev-dart-app:/module.dart": module
}, {
}, null);
```

### Bootstrapping code

TBD

## Dart2js hunks

Dart2js only splits code in multiple files if using deferred loading:

```dart
import 'hello_world.dart' deferred as foo;

main() async {
  await foo.loadLibrary();
  foo.main();
}
```

Example [main hunk](deferred_sample1.dart.dart2js.js) and [deferred hunk](deferred_sample1.dart.dart2js.js).
