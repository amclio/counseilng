const fs = require('fs')

const path = 'libs/config.js'

fs.unlinkSync(path)

fs.appendFileSync(path, `export const baseUrl = "${process.env.BASE_URL}"\n`)
fs.appendFileSync(
  path,
  `export const supabaseUrl = "${process.env.SUPABASE_URL}"\n`
)
fs.appendFileSync(
  path,
  `export const supabaseKey = "${process.env.SUPABASE_KEY}"\n`
)
