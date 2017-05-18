var materialize = require('./');
var util = require('util');
var assert = require('assert');

var nameValue = [
  { name: 'foo', value: 21 },
  { name: 'foo', value: 23 },
  { name: 'bar', value: 42 }
];

var propVal = [
  { prop: 'foo', val: 23 },
  { prop: 'bar', val: 42 }
];

var fooBar = { foo: 23, bar: 42 };

[
  [ [nameValue], fooBar ],
  [ [propVal, 'prop', 'val'], fooBar ],
  [ [[]], {} ],
  [ [undefined], {} ]
]
.forEach(function(t) {
  var args = t[0].map(JSON.stringify);
  assert.deepEqual(materialize.apply(this, t[0]), t[1],
    util.format('✘  materialize(%s) !== %j', args, t[1])
  );
  console.log('✔  materialize(%s) == %j', args, t[1]);
});
