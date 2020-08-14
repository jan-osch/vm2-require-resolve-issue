const { NodeVM } = require('vm2')

const vm = new NodeVM({
  require: {
    external: {
      modules: ['lodash']
    },
    root: __dirname
  }
})
vm.run(
  `
     require('lodash')
     console.log('works as expected')
    `,
  'vm.js'
)
