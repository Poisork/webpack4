async function  start() {
    return await Promise.resolve('Async is working')
}

start().then(console.log)

const unused = 23

class Util {
    static id = Date.now()
}

console.log(Util.id)
console.log(unused)

import('lodash').then(_ => {
    console.log(_.random(0,42, true))
})
