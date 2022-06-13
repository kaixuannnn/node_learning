const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')

writeFileSync('./content/new.txt', `here is the result: ${first}`, {
  flag: 'a'
})
