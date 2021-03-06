## Run TestRPC
*   Run `testrpc`

## Run TestRPC with specified / hard-coded accounts

*   `testrpc --account="<privatekey>,balance" [--account="<privatekey>,balance"]`
*   Example:
```
testrpc --account="0xa1580e62b21b7c2f79cbfd7c755ef459bf5eb6b140e2a22a4e7aed48e03198a3,10000000000000000000000000" --account="0x5c5fe9067b077a2706351ff0f4e1b59b19d526da77a1875b916849030a9e75da,20000000000000000000000000" --account="0x33a844a8bc4d8428528e7a3198fc0bb438a933ce77df430d86eee79a5e44fff8,30000000000000000000000000" --account="0x52f2129266c24d8d81b38c38e8410388778aa66181a75016332716df8c0f66fb,40000000000000000000000000" --account="0x43c1aa08e6ee114f1fb21f4ed04084def5d761e4cb4e95beaf6c22fb5320f88c,50000000000000000000000000" --account="0x407d3445c156d25f6e68fdd2696db1e4ba450e668aca271189c10eef0d3f55cd,60000000000000000000000000" --account="0xdb68011191f47133e210bf69f9691f4f57fb91af4ad9cb43224e4f75ac292200,100000000000000000000000000"
```

## Interact with TestRPC
*   Install truffle
*   Run `truffle console`
*   Execute commands
    *   E.g. `Web3.eth.accounts`