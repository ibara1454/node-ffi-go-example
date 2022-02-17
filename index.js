const ffi = require('ffi-napi');
const ref = require('ref-napi');
const Buffer = require('buffer').Buffer;
const StructType = require('ref-struct-napi');

// See lib.h
// typedef struct { const char *p; ptrdiff_t n; } _GoString_;
// typedef _GoString_ GoString;
const GoString = StructType({
  p: ref.types.CString,
  n: ref.types.uint,
});

const createGoString = (str) => {
  const goString = new GoString({
    p: str,
    n: Buffer.byteLength(str),
  });
  return goString;
};

const lib = ffi.Library('./lib/dist/lib.so', {
  'sayHelloG': ['void', [GoString]],
  'sayHelloC': ['void', ['string']],
});

lib.sayHelloG(createGoString('GoString'));
lib.sayHelloC('*char');
