var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-keys');

describe('next/keys', function () {

  var obj1 = {
    0: 'val0',
    1: 'val1',
    2: 'val2',
    3: 'val3',
    4: 'val4',
  };


  it(" nx.keys( obj1 ) => [ '0', '1', '2', '3', '4' ] ", function () {
    var res1 = nx.keys( obj1 );
    assert.deepEqual(res1, [ '0', '1', '2', '3', '4' ]);
  });



  it('nx.keys( obj1, parseInt) => [ 0, 1, 2, 3, 4 ]', function () {
    var res2 = nx.keys( obj1, parseInt);
    assert.deepEqual(res2, [ 0, 1, 2, 3, 4 ]);
  });

});
