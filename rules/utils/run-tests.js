const { rules } = require('../../index')

const title = 'tests executed in '

const main = async () => {
  // biome-ignore lint/suspicious/noConsoleLog: ( ͡° ͜ʖ ͡°)
  console.log('tests starts...')
  console.time(title)
  await Promise.all(
    Object.keys(rules).map(async name => {
      // biome-ignore lint/suspicious/noConsoleLog: ( ͡° ͜ʖ ͡°)
      console.log(`test rule : ${name}`)
      await import(`../${name}.test.js`)
    }),
  )
}

main()
  .then(() => {
    console.timeEnd(title)
  }) // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(error => {
    console.error(error)
  })
