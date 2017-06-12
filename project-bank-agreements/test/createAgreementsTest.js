var CreateAgreements = artifacts.require("./CreateAgreements.sol");

contract('CreateAgreements', function(accounts) {
    it("check admin role assignments and creation of the pledge agreement", function() {
        var addressOfOwner = "0xb474ac28b0206da7fca0547023f9a4726e02a708"; // set correct address

        var test1;
        var test2;
        var test3;
        
        return CreateAgreements.deployed().then(function(createAgreementsContract) {
            createAgreementsContract.checkAdministrators.call(addressOfOwner).then(function(check) {
                test1 = check.valueOf();
            }).then(function(){
                createAgreementsContract.removeAdministratorRole(addressOfOwner, {from: accounts[0]}).then(function() {
                    createAgreementsContract.checkAdministrators.call(addressOfOwner).then(function(check) {
                        test2 = check.valueOf();
                    }).then(function(){
                        createAgreementsContract.setAdministrators(addressOfOwner, {from: accounts[0]}).then(function() {
                            createAgreementsContract.checkAdministrators.call(addressOfOwner).then(function(check) {
                                test3 = check.valueOf();
                            }).then(function(){
                                createAgreementsContract.createPledgeAgreement("debitAccount", "creditAccount", {from: accounts[0]}).then(function(agreement){
                                    assert.notEqual(agreement, null, "Agreement address is null!")
                                    assert.equal(test1, true, "The owner is not set as admin (false)!");
                                    assert.equal(test2, false, "The owner is set as admin (true)!");
                                    assert.equal(test3, true, "The owner is not set as admin (false)!");
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});