var CreateAgreements = artifacts.require("./CreateAgreements.sol");
var PledgeAgreement = artifacts.require("./PledgeAgreement.sol");

module.exports = function(deployer) {
  deployer.deploy(PledgeAgreement , "depositAccount", "creditAccount");
  deployer.deploy(CreateAgreements);
};

