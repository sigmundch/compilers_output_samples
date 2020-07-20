#!/usr/bin/env bash

# DART_SDK is the root of the SDK being used.
# If DART_SDK is not set, assume this script is run from root.
DART_SDK=${DART_SDK:-.}

echo Compiling ${1?:No input file specified}

# Run ddc, leaving output in files based in input file.
# e.g. foo.dart --> foo.js
"$DART_SDK/sdk/bin/dart" "$DART_SDK/pkg/dev_compiler/tool/ddb" \
  --enable-experiment=non-nullable \
  --sound-null-safety \
  --debug \
  --mode=compile \
  $1
