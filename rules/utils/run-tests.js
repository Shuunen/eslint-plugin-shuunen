/* eslint-disable no-console */
const { rules } = require('../../index.cjs')

const title = 'tests executed in '

const main = async () => {
  console.log('tests starts...')
  console.time(title)
  await Promise.all(
    Object.keys(rules).map(async name => {
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
