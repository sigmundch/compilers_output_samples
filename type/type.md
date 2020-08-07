# Types

```dart
class InterfaceType {}

class GenericType<T> {
  T genericFunction<S>(S s, T t) => t;
}

main() {
  var primitive = true;
  print(primitive is bool);

  var interface = InterfaceType();
  print(interface is InterfaceType);

  var generic = GenericType<int>();
  print(generic is GenericType<int>);

  var function = (String s) => s.length;
  print(function is int Function(String));

  var genericFunction = <T>(T t) => t;
  print(genericFunction is S Function<S>(S));
  print(generic.genericFunction is int Function<T>(T, int));
}
```


## ddc
```js

dart.addTypeTests = function addTypeTests(ctor, isClass) {
  if (isClass == null) isClass = Symbol("_is_" + ctor.name);
  ctor.prototype[isClass] = true;
  ctor.is = function is_C(obj) {
    return obj != null && (obj[isClass] || dart.is(obj, this));
  };
  ctor.as = function as_C(obj) {
    if (obj != null && obj[isClass]) return obj;
    return dart.as(obj, this);
  };
};

/* ... */

var ObjectN = () => (ObjectN = dart.constFn(dart.nullable(core.Object)))();
var GenericTypeOfint = () => (GenericTypeOfint = dart.constFn(type.GenericType$(core.int)))();
var StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
var TToT = () => (TToT = dart.constFn(dart.gFnType(T => [T, [T]], T => [ObjectN()])))();
var SAndintToint = () => (SAndintToint = dart.constFn(dart.gFnType(S => [core.int, [S, core.int]], S => [ObjectN()])))();

/* ... */

type.InterfaceType = class InterfaceType extends core.Object {};
(type.InterfaceType.new = function() {
  ;
}).prototype = type.InterfaceType.prototype;
dart.addTypeTests(type.InterfaceType);
dart.addTypeCaches(type.InterfaceType);
dart.setLibraryUri(type.InterfaceType, L0);

/* ... */

type.main = function main() {
  let primitive = true;
  core.print(typeof primitive == 'boolean');
  let $interface = new type.InterfaceType.new();
  core.print(type.InterfaceType.is($interface));
  let generic = new (GenericTypeOfint()).new();
  core.print(GenericTypeOfint().is(generic));
  let $function = dart.fn(s => {
    if (s == null) dart.nullFailed(L0, 17, 26, "s");
    return s.length;
  }, StringToint());
  core.print(StringToint().is($function));
  let genericFunction = dart.fn((T, t) => t, TToT());
  core.print(TToT().is(genericFunction));
  core.print(TAndintToint().is(dart.bind(generic, 'genericFunction')));
};
```


## dart2js (NNBD weak mode)

```js
main: function() {                                                                                                                                        
  var t1, generic;                                                           
  P.print(true);                                                             
  P.print(true);                                                             
  t1 = type$.GenericType_int;                                                
  generic = new V.GenericType(t1);                                               
  P.print(t1._is(generic));                                                  
  P.print(type$.int_Function_String._is(new V.main_closure()));              
  P.print(type$.A_Function_A_extends_nullable_Object_A._is(new V.main_closure0()));
  P.print(type$.int_Function_A_extends_nullable_Object_2_A_and_int._is(generic.get$genericFunction()));
}

/* ... */

var type$ = (function rtii() {                                                        
  var findType = H.findType;                                                        
  return {                                                                          
    A_Function_A_extends_nullable_Object_A: findType("0^(0^)<Object?>"),            
    Function: findType("Function"),                                                 
    GenericType_int: findType("GenericType<int>"),                                
    JSArray_String: findType("JSArray<String>"),                                  
    JSArray_dynamic: findType("JSArray<@>"),                                        
    JSNull: findType("JSNull"),                                                     
    JavaScriptFunction: findType("JavaScriptFunction"),                               
    Null: findType("Null"),                                                             
    Object: findType("Object"),                                                     
    String: findType("String"),                                                   
    bool: findType("bool"),                                                     
    double: findType("double"),                                                 
    dynamic: findType("@"),                                                       
    int: findType("int"),                                                           
    int_Function_A_extends_nullable_Object_2_A_and_int: findType("int(0^,int)<Object?>"),
    int_Function_String: findType("int(String)"),                                   
    legacy_Never: findType("0&*"),                                                  
    legacy_Object: findType("Object*"),                                             
    nullable_Future_Null: findType("Future<Null>?"),                                
    nullable_Object: findType("Object?"),                                           
    num: findType("num")                                                            
  };                                                                           
})();
```
