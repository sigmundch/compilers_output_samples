#!/usr/bin/bash

# DART_SDK is the root of the SDK being used.
# If DART_SDK is not set, assume this script is run from root.
DART_SDK=${DART_SDK:-.}

echo Compiling ${1?:No input file specified}

# Run dart2js, leaving output in files based in input file.
# e.g. foo.dart --> foo.dart.dart2js.js

"$DART_SDK/sdk/bin/dart2js" \
  --enable-experiment=non-nullable --sound-null-safety \
  --disable-inlining --disable-type-inference \
  --packages="$DART_SDK/.packages" \
  --out="$1.dart2js.js" \
  $1
