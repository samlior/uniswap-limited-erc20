const { task, types } = require('hardhat/config')
const { BN } = require('ethereumjs-util')
require('@nomiclabs/hardhat-web3')

async function createWeb3Contract({ name, artifactName, address, deployments, web3, from }) {
  const { getArtifact, get } = deployments
  const addr = address ? address : (await get(name)).address
  const contract = new web3.eth.Contract((await getArtifact(artifactName ? artifactName : name)).abi, addr, from ? { from } : undefined)
  return { addr, contract }
}

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

task('balance', "Prints an account's balance")
  .addParam('account', 'User account')
  .setAction(async (taskArgs, { web3 }) => {
    const { account } = taskArgs
    const balance = await web3.eth.getBalance(account)

    console.log(web3.utils.fromWei(balance, 'ether'), 'ETH')
  })
