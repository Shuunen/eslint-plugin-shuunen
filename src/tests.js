import { listRulesNames, PLUGIN_NAME } from '.'

const title = `${PLUGIN_NAME} lint tests executed in `

const main = async () => {
  console.log(`${PLUGIN_NAME} lint tests starts...`)
  console.time(title)
  await Promise.all(listRulesNames().map(async (name) => {
    console.log(`${PLUGIN_NAME} lint test rule : ${name}`)
    await import(`./${name}/test.ts`)
  }))
}

main()
  .then(() => { console.timeEnd(title) })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch((error) => { console.error(error) })
