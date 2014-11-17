var test = require('tape').test
var domready = require('domready')
var style = require('dom-style')
var events = require('dom-events')
var offset = require('./')
var simulate = require('simulate-event')


domready(function() {
    var div = document.createElement("div")
    style(div, {
        width: '64px',
        height: '64px',
        background: 'red',
        margin: '0',
        display: 'block',
        padding: '25px',
        left: '50px',
        position: 'absolute'
    })

    style(document.body, {
        margin: '5px',
        padding: '0px'
    })

    document.body.appendChild(div)

    var child = document.createElement("div")
    child.innerText = 'foobar'
    div.appendChild(child)
    
    events.on(div, 'mousemove', function(ev) {
        console.log(offset(ev))
        //console.log(ev.clientX, ev.clientY)
        // console.log(ev.shiftKey)
    })

    // simulate(div, 'click', { clientX: 10, shiftKey: true })

})