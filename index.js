const { readFileSync, existsSync, writeFileSync } = require('fs')

const [inputFile, outputFile, overwriteFlag] = process.argv.slice(2)

if (!existsSync(inputFile)) {
  let finalString = ''
  process.stdin.on('readable', () => {
    let chunk
    // eslint-disable-next-line no-cond-assign
    while ((chunk = process.stdin.read()) !== null) {
      finalString += chunk.toString()
    }
    console.log(finalString.split('\n').map((line, index) => `${index + 1}: ${line}`).join('\n').slice(0, -1))
  })
} else if (outputFile === undefined) {
  console.log('Missing output file argument.')
  process.exit(1)
} else if (existsSync(outputFile) && (overwriteFlag === '-n' || overwriteFlag === undefined)) {
  console.log('Cannot overwrite existing output file.')
  process.exit(1)
} else if (!(['-n', '-y', undefined].includes(overwriteFlag))) {
  console.log('Invalid overwrite option.')
  process.exit(1)
} else if (!existsSync(outputFile) || overwriteFlag === '-y') {
  const stringResult = readFileSync(inputFile, 'utf-8').split('\n').map((line, index) => `${index + 1}: ${line}`).join('\n')
  writeFileSync(outputFile, stringResult)
  process.exit(1)
}
