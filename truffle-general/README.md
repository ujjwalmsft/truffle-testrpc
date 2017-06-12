## Migrate to another network (e.g. Azure)

*   Modify `.\truffle.js` and save the file
```
module.exports = {
    networks: {
        azure :{
            host: "", //Adress of your Azure RPC endpoints (DNS name recommended)
            port: 8545, //Port of RPC - basically rest the same
            network_id: "" //Network id which you have choose when created the network 
        },
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        }
    }
};
```

*   To migrate to a specific network
    *   `truffle migrate --network networkname`
        *   E.g. `truffle migrate --network azure`

*   To open Truffle console for a specific network
    *   `truffle console --network networkname`
        *   E.g. `truffle console --network azure`

*   If an error with `... unlock account ...` is displayed
    *   Go to node and unlock account[0]
        *   `personal.unlockAccount(eth.accounts[0])`