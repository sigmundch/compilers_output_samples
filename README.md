# Compilers output samples

This repo contain code samples that illustrate the JavaScript representations
of DDC and dart2js. They cover how common entities are represented (classes,
methods), calling conventions, how types are reified, how native and JS-interop
is hooked, how code is organized in modules, among other things.

How is code organized in files?

* DDC uses [modules](module/README.md)
* dart2js uses hunks (TBD)

How are classes represented?

* [classes, constructors, and inheritance](class/classes1.md)
* [generics](class/generics.md)
