// stub defaults
global.window = {}
global.document = { body: {} }

var test = require('tape')
var offset = require('./')

test('should provide mouse offset', function (t) {
  var off = offset({ clientX: 5, clientY: 3 }, elementStub())
  t.deepEqual(off, [ 1.5, 0.5 ], 'uses element client rect')

  off = offset({ clientX: 5, clientY: 3 }, global.window)
  t.deepEqual(off, [ 5, 3 ], 'uses window global')

  off = offset({ clientX: 5, clientY: 3, currentTarget: elementStub() })
  t.deepEqual(off, [ 1.5, 0.5 ], 'defaults to currentTarget')

  off = []
  var result = offset({ clientX: 5, clientY: 3 }, global.window, off)
  t.equal(off, result, 'does not create array when one is specified')
  t.end()

  function elementStub () {
    return {
      getBoundingClientRect: function () {
        return { left: 3.5, top: 2.5 }
      }
    }
  }
})
