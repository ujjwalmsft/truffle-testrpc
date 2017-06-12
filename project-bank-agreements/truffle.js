module.exports = {
  networks: {
    azure :{
        host: "xxx.xxx.cloudapp.azure.com",
        port: 8545,
        network_id: "72"
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
