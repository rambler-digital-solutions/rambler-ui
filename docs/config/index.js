import env from /* preval */ './env'

const targets = env.targets
let config = env

if (targets) {
  const targetConfig = targets[location.hostname]
  if (targetConfig) config = {...config, ...targetConfig}
  delete config.targets
}

export default config
