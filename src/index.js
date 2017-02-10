const cmz = require('cmz')
const styles = cmz()

var root = document.getElementById('root')
root.className = styles('message')
root.innerHTML = 'Hello World'
