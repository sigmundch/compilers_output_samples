// Generated by dart2js (fast startup emitter, strong), the Dart to JavaScript compiler.
self.$__dart_deferred_initializers__ = self.$__dart_deferred_initializers__ || Object.create(null);
$__dart_deferred_initializers__.current = function(hunkHelpers, init, holdersList, $) {
  var C,
  H = {
    printToConsole: function(line) {
      H.printString(line);
    },
    printString: function(string) {
      if (typeof dartPrint == "function") {
        dartPrint(string);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(string);
        return;
      }
      if (typeof window == "object")
        return;
      if (typeof print == "function") {
        print(string);
        return;
      }
      throw "Unable to print message: " + String(string);
    }
  },
  J,
  P = {
    print: function(object) {
      H.printToConsole(J.toString$0$(object));
    }
  },
  K,
  E = {
    main: function() {
      P.print("Hello World");
    }
  };
  hunkHelpers.setFunctionNamesIfNecessary([H, P, E]);
  C = holdersList[0];
  H = hunkHelpers.updateHolder(holdersList[1], H);
  J = holdersList[2];
  P = hunkHelpers.updateHolder(holdersList[3], P);
  K = holdersList[4];
  E = hunkHelpers.updateHolder(holdersList[5], E);
  var typesOffset = hunkHelpers.updateTypes([]);
  0;
  0;
};

$__dart_deferred_initializers__["etqPwoCdGQUOU+ymVQtzoK3tfYY="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=deferred_sample1.dart.dart2js.js_1.part.js.map
