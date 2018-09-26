/* eslint-env node */
let {APP_CONFIG: config} = process.env
const targets = config.targets

if (targets) {
  const targetConfig = targets[location.hostname]
  if (targetConfig) config = {...config, ...targetConfig}
  delete config.targets
}

export default config
