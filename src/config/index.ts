//put urls here
const configs = {
  development: {},
  production: {},
  test: {},
}

const env = process.env.NODE_ENV || 'development'

const config = {
  ...configs[env],
  env,
}

export default config
