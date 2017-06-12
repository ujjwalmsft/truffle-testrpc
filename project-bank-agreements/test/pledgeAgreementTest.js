var PledgeAgreement = artifacts.require("./PledgeAgreement.sol");

contract('PledgeAgreement', function(accounts) {
    it("check account information", function() {
        return PledgeAgreement.deployed().then(function(pledgeAgreement) {
            pledgeAgreement.getInformation.call().then(function(result) {
                assert.equal(result[0], "depositAccount", "Wrong deposit account information!");
                assert.equal(result[1], "creditAccount", "Wrong credit account information!");
            })
        })
    });
    it("check amount of debt", function() {
        return PledgeAgreement.deployed().then(function(pledgeAgreement) {
            pledgeAgreement.openDebt.call(50).then(function(debt) {
                assert.equal(debt, 50, "Wrong amount of debt!");
            })
        })
    })
});