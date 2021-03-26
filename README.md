# uniswap-limited-erc20

![Node Version](https://img.shields.io/badge/node-%e2%89%a5v12.0.0-blue)
![NPM Version](https://img.shields.io/badge/npm-%E2%89%A5v6.0.0-blue)
![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-3.2.0-blue)

## Environment variable

```sh
# the api key of infura(if you want to connect mainnet or ethereum testnet, you must provide this key).
export INFURA_API_KEY=xxx
# the mnemonic of deployer(if not provided, the deployer will be the first account of the default accouts).
export MNEMONIC="test test test test test test test test test test test junk"
# deployer address, it should match the mnemonic
export DEV_ADDR=0x...abc
# etherscan api key, used to verify and publish the contracts
export ETHERSCAN_KEY=xxx
```

## Install

```
npm i
```

## Compile

```
npm run build
```

## Deploy

### Deploy to mainnet

```
npm run deploy:mainnet
```

### Deploy to localhost

```
npm run node
```

## Tasks

```
accounts              Prints the list of accounts
allow                 Allow the amount to be used for sales
allowamount           Query the allow amount of account
allowmax              Allowmax the amount to be used for sales
balance               Prints an account's balance
balance:erc20         Prints an account's ERC20 balance
mint                  Mint ERC20 token to account
verify                Verifies contract on Etherscan
```

You can get detailed options of the task like this:

```
npx hardhat allow --help
```

You can simply run the task like this:

```
npx hardhat --network localhost allow --account 0x...abc --amount 100
npx hardhat --network localhost allowamount --account 0x...abc
```

## Verify

**notice: please first make sure you can access [api.etherscan.io](https://api.etherscan.io)**

```
npx hardhat verify --network mainnet 0x...abc "Test Limited ERC20" "TLE" "18" "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f" "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f"
```
