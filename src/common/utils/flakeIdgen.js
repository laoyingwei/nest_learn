var FlakeId = require('flake-idgen');
var flakeIdGen = new FlakeId();
console.log(flakeIdGen.next()); // <Buffer 50 dd d5 99 01 c0 00 00>
console.log(flakeIdGen.next()); // <Buffer 50 dd d5 99 02 80 00 00>
console.log(flakeIdGen.next()); // <Buffer 50 dd d5 99 02 80 00 01>
