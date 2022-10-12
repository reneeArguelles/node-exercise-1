const { readFileSync, existsSync } = require('fs')

if (existsSync(process.argv[2])) {
  const codePerLine = readFileSync(process.argv[2], 'utf-8').split('\n')

  for (let i = 0; i < codePerLine.length; i += 1) {
    console.log(`${i + 1}: ${codePerLine[i]}`)
  }
} else {
  console.log('File does not exist')
}
