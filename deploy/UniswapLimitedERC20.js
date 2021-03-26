const settings = require('./deploySettings')

module.exports = async function ({ deployments, getNamedAccounts }) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  const token = await deploy('UniswapLimitedERC20', {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    args: [settings.name, settings.symbol, settings.decimals, settings.factory, settings.weth, settings.codeHash],
  })
  console.log('UniswapLimitedERC20 deployed on:', token.address)
}
