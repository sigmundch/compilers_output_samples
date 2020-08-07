# Nullability

```dart
import 'legacy_lib.dart';                                                           
                                                                                    
// Prevent dart2js from constant folding all the tests.                                                                                                       
@pragma('dart2js:noInline')                                                         
dynamic confuse(x) => x;                                                            
dynamic s;                                                                          
                                                                                    
main() {                                                                            
  s = confuse(null);                                                                
                                                                                    
  print(s is String?); // true                                                      
  print(isLegacyString(s)); // false                                                
  print(s is String); // false                                                      
  print(s is int?); // true                                                         
                                                                                    
  s = confuse("Hello World");                                                       
                                                                                    
  print(s is String?); // true                                                      
  print(s is String); // true                                                       
  print(isLegacyString(s)); // true                                                 
  print(s is int?); // false                                                        
}                                                                                   
                                                                                    
// From legacy_lib.dart                                                             
bool isLegacyString(dynamic s) => s is String;
```

## ddc

```js
var StringN = () => (StringN = dart.constFn(dart.nullable(core.String)))();
var intN = () => (intN = dart.constFn(dart.nullable(core.int)))();
var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
const CT = Object.create(null);
nullability.main = function main() {
  let s = null;
  core.print(StringN().is(s));
  core.print(legacy_lib.isLegacyString(s));
  core.print(typeof s == 'string');
  core.print(intN().is(s));
  s = "Hello World";
  core.print(StringN().is(s));
  core.print(typeof s == 'string');
  core.print(legacy_lib.isLegacyString(s));
  core.print(intN().is(s));
};
legacy_lib.isLegacyString = function isLegacyString(s) {
  return StringL().is(s);
};
```


## dart2js

```js
main: function() {                                                              
  var t2, t3,                                                                   
    t1 = V.confuse(null);                                                       
  $.s = t1;                                                                     
  t2 = type$.nullable_String;                                                   
  P.print(t2._is(t1));                                                          
  P.print(V.isLegacyString($.s));                                               
  P.print(typeof $.s == "string");                                              
  t1 = type$.nullable_int;                                                      
  P.print(t1._is($.s));                                                                                                                                   
  t3 = V.confuse("Hello World");                                                
  $.s = t3;                                                                     
  P.print(t2._is(t3));                                                          
  P.print(typeof $.s == "string");                                              
  P.print(V.isLegacyString($.s));                                               
  P.print(t1._is($.s));                                                         
},                                                                              
isLegacyString: function(s) {                                                   
  return typeof s == "string";                                               
}

/* ... */

var type$ = (function rtii() {                                                 
  var findType = H.findType;                                                   
  return {                                                                     
    BoundClosure: findType("BoundClosure"),                                    
    Function: findType("Function"),                                            
    Iterable_dynamic: findType("Iterable<@>"),                                 
    JSArray_String: findType("JSArray<String>"),                               
    JSArray_dynamic: findType("JSArray<@>"),                                   
    JSNull: findType("JSNull"),                                                
    JavaScriptFunction: findType("JavaScriptFunction"),                        
    Null: findType("Null"),                                                    
    Object: findType("Object"),                                                
    String: findType("String"),                                                
    bool: findType("bool"),                                                    
    double: findType("double"),                                                
    int: findType("int"),                                                      
    legacy_Never: findType("0&*"),                                             
    legacy_Object: findType("Object*"),                                        
    nullable_Future_Null: findType("Future<Null>?"),                           
    nullable_Object: findType("Object?"),                                      
    nullable_String: findType("String?"),                                      
    nullable_int: findType("int?"),                                            
    num: findType("num")                                                       
  };                                                                           
})();
```
