const { readFileSync, existsSync, writeFileSync } = require('fs')
const { argv } = require('process')

if (existsSync(argv[2])) {
  if (argv.length - 2 === 2 || argv.length - 2 === 3) {
    const stringResult = readFileSync(argv[2], 'utf-8').split('\n').map((line, index) => `${index + 1}: ${line}`).join('\n')
    if (existsSync(argv[3])) {
      if (argv.length - 2 === 2 || argv[4] === '-n') {
        console.log('Cannot overwrite existing output file.')
      } else if (argv[4] === '-y') {
        writeFileSync(argv[3], stringResult)
      } else {
        console.log('Invalid overwrite option')
      }
    } else {
      writeFileSync(argv[3], stringResult)
    }
  } else {
    console.log('Missing output file argument.')
  }
} else {
  console.log('Input file does not exist.')
}
