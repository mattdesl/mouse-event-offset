# mouse-event-offset

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Computes the `[ offsetX, offsetY ]` from a mouse or touch event, relative to the top left of the `target` element.

```js 
var offset = require('mouse-event-offset')

window.addEventListener('touchstart', function (ev) {
  var target = ev.currentTarget
  var touch = ev.changedTouches[0]
  var pos = offset(touch, target)
  //=> [ 128, 52 ]
})
```
## Usage

[![NPM](https://nodei.co/npm/mouse-event-offset.png)](https://nodei.co/npm/mouse-event-offset/)

### `position = offset(event, [target], [out])`

Pass a MouseEvent or TouchEvent as `event`. 

Optionally, you can specify a `target` element which the touch event should be relative to. Defaults to `event.currentTarget`, falling back to `event.srcElement` for older IE.

You can also specifiy `out` to store the position in that array, and avoid creating a new one.

## Changelog

- 3.0: new version; simpler API, less assumptions, avoids GC thrashing
- 2.0: uses `ev.currentTarget` instead of `ev.target`
- 1.0: simple implementation using `ev.target || ev.srcElement`

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/mouse-event-offset/blob/master/LICENSE.md) for details.
