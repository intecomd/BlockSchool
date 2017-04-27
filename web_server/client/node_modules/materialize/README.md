[![Build Status](https://travis-ci.org/fgnass/materialize.svg?branch=master)](https://travis-ci.org/fgnass/materialize)

### Tiny utility to turn a list into an object

Example:

```js
var materialize = require('materialize');

var props = [
  { name: 'foo', value: 23 },
  { name: 'bar', value: 42 }
];

console.log(materialize(props));
```

Output:

```js
{ foo: 32, bar: 42 }

```

By default `materialize()` looks for a `name` and a `value` property. You may
specify different names like this:

```js
var props = [
  { property: 'foo', val: 23 },
  { property: 'bar', val: 42 }
];

var obj = materialize(props, 'property', 'val');
```

### License

MIT
