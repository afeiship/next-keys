# next-keys
> Object keys enhanced version.


## install
```bash
npm install -S afeiship/next-keys --registry=https://registry.npm.taobao.org
```

## usage:
```js
import NxKeys from 'next-keys';
const obj1 = {
  0: 'val0',
  1: 'val1',
  2: 'val2',
  3: 'val3',
  4: 'val4',
};

nx.keys( obj1 , parseInt);
// => [ 0, 1, 2, 3, 4 ]
```
