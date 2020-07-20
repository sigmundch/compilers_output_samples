var main = Object.create(dart.library);
export { main };
import { core, dart, dartx } from 'dart_sdk.js';
import { module } from 'module.js';
const CT = Object.create(null);
main.main = function main$() {
  core.print(dart.wrapType(module.Foo));
  core.print(dart.bind(new module.Foo.new(), 'func'));
  new module.Foo.new().func();
};
dart.trackLibraries("main", {
  "dev-dart-app:/main.dart": main
}, {
}, null);
