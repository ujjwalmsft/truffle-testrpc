# Setup dev environment

*   Setup Ethereum instance on Azure
    *   Demonstrate portal
    *   Show deployments
    *   Show command windows with tx and mn node
    *   Demonstrate setting up an account, tranferring tokens and working with MetaMask
*   Install Visual Studio Code
    *   Install `Solidity` extension
*   Initialize Truffle project
    *   `truffle init`
*   Setup connection to the network in Azure
    *   [Configuration](https://github.com/BlockchainRepos/truffle-testrpc/tree/master/truffle-general)

# Create Smart Contract

*   Open one command window connected to mining node and show the mining
    *   Connect to tx node
    *   Connect from the tx to the mn node
        *   Get the IP address from nic-mn0
        *   Show the output
            *   `ps -aux`
            *   `tail -f /proc/<pid>/fd/1`
*   Code the contract and save it in the `.\contracts` folder
*   Check the contract via Remix
    *   [Remix](https://ethereum.github.io/browser-solidity/#version=soljson-v0.4.11+commit.68ef5810.js)
*   Deploy the Contract via Truffle and Ubuntu Bash
    *   Go to tx node and unlock coinbase
        *   `geth attach`
        *   `personal.unlockAccount(eth.accounts[0], pwd, 3600)`
    *   `truffle migrate --network azure`

# Demonstrate interaction with the Smart Contract

## Via Truffle
*   Open Truffle connected to the network in Azure
    *   `truffle console --network azure`
    *   `var ref = SimpleContract.deployed()`
    *   `var contractAddress = "0x31a76ee59a4d8ba820a6204f412c1e1d907f4b88"`
    *   `var account0 = "0xd9a6018ca07e5b7f4a5fab661d371f2bdd00294f"`
    *   `var account1 = "0x7c0af975d6bf16601a02ab1714375a7b98fd9dbe"`
    *   `var app = SimpleContract.at(contractAddress)`
    *   `app.address`
    *   `app.getStateOfSettlement.call()`
    *   `app.changeStateOfSettlement(true, {from: account1})'`
    *   `app.changeStateOfSettlement(true, {from: account0})'`
    *   `app.getStateOfSettlement.call()`
    *   `app.settlement({from: account0})`
    *   `app.getStateOfSettlement.call()`
    *   `app.changeStateOfSettlement(false, {from: account0})'`
    *   `app.getStateOfSettlement.call()`

## Via UI