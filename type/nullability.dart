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
