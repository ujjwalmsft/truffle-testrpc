## Initialize the project and deploy a Smart Contract
*   Create a project folder and initialize a new truffle project
    *  `truffle init`
    *  If you delete files don't delete
        *   `truffle.js` 
        *   `.\contracts\Migrations.sol`
        *   The files within `.\migrations`
*   Code the contract and store it in the `contracts` folder
    *   Important: at least one contract or library name within the .sol file has to match the filename exactly!
*   Start the EVM test environment with TestRPC
    *   Open a new command window
    *   `testrpc`
*   Start truffle console in another command window
    *   `truffle console`
*   Optional step: compile the contract
    *   Contract that have been changed since the last time: `compile`
    *   Compile all in the `contracts` folder: `compile --compile-all`
*   Use the deployer to stage deployment tasks
    *   Open `.\migrations\2_deploy_contracts.js`
    *   Add `deployer.deloy(ContractName);`
*   Optional: add parameters
    *   ...
*   Deploy the contracts specified in `2_deploy_contracts.js`
    *  `migrate`
    *  This will create the deployment JSON files related to the contracts -> `.\build\contracts`


## Interact with a deployed contract
*   Get information about a contract
    *   `ContractName.deployed()`
*   Run functions
    *   Option 1:
        *   `ContractName.deployed().then(function(instance) { return instance.functionName() });`
    *   Option 2:
        *  `var ref = contractName.deployed();`
            *  Get address by runnin `ref`
        *  `var app = contractName.at("address")`
        *  Interact
            *  Get address:     `app.address`
            *  Call function:   `app.functionName.call(param)`
            *  Transaction:     
                *   With the receipt as response: `app.functionName(param, {from: address})`
                *   With the transaction hash as response: `app.functionName.sendTransaction(param, {from: address})`

## Issues
*   Be careful with the solidity compiler version. It depends on the truffle version which compiler version is supported!


## Sources
1.  [Truffle Docs](https://truffle.readthedocs.io/en/beta/)