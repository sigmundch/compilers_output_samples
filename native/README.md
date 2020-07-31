# Samples of how browser-defined Javascript types (aka native types) are supported

How do we support calling dart:html
Symbols in DDC, show typed calls and dynamic calls []
Interceptors in dart2js

## Native types and accessors
* DDC:
  * Top level objects (e.g., `document`) are defined with the `JS()` helper function (from `dart:_foreign_helper`).
  Excerpt from `html_dart2js.dart`: `Window get window => JS('Window', 'window');`
  * Dispatch done via symbols (like for static and private fields)
    ```var $text = dartx.text;
    var $append = dartx.append;
    simple_call.main = function main() {
      let div = html.DivElement.new();
      div[$text] = "some text here";
      dart.nullCheck(html.document.body)[$append](div);
    };```

## Dynamic native function calls
* DDC: 
Native JS functions pass through a series of runtime checks (via the runtime function `dsend`) before finally being invoked with [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).
