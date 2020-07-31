var hello_world = Object.create(dart.library);
export { hello_world };
import { core, dart, dartx } from 'dart_sdk.js';
const CT = Object.create(null);
hello_world.main = function main() {
  core.print("Hello World");
};
dart.trackLibraries("hello_world", {
  "org-dartlang-app:/hello_world.dart": hello_world
}, {
}, null);

//# sourceMappingURL=hello_world.js.map
