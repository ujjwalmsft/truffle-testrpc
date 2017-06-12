pragma solidity ^0.4.7;

import "./PledgeAgreement.sol";

contract CreateAgreements {
    /*
    * @title Create agreements
    * @author Dr. Dolittle
    * @notice Manage administrators and create agreements (respectively related contracts)
    */

    // Variables
    address private owner;
    mapping (address => bool) administrators; // true = administrative role

    // Modifiers
    modifier onlyIfOwner() {
        if (msg.sender != owner) {
            throw;
        }
        _;
    }

    modifier onlyIfAdministrator(address _addressOfAdmin) {
        if (!administrators[_addressOfAdmin] || administrators[_addressOfAdmin] == false) {
            throw;
        }
        _;
    }

    // Events
    event AdministratorsInformation (
        string message,
        address addressOfAdmin
    );

    event AgreementCreated (
        string message,
        address addressOfAgreement
    );

    // Constructor
    function CreateAgreements () {
        owner = msg.sender;
        // Add owner as admin
        setAdministrators(owner);
    }

    // Functions
    /**@dev Set administrators
      * @param addressOfAdmin   Address of the account of the administrator
      */
    function setAdministrators (address addressOfAdmin) onlyIfOwner {
        administrators[addressOfAdmin] = true;
        AdministratorsInformation (
            "Administrator added!",
            addressOfAdmin
        );
    }

    /**@dev Check if a specific adddress has administrative rights
      * @param addressOfAdmin   Address of the account of the administrator
      * @return Boolean to indicate if the address has administrative rights (true == administrative rights)
      */
    function checkAdministrators (address addressOfAdmin) returns (bool) {
        return administrators[addressOfAdmin];
    }

    /**@dev Remove administrative role for a certain address
      * @param addressOfAdmin   Address of the account of the administrator
      */
    function removeAdministratorRole (address addressOfAdmin) onlyIfOwner {
        administrators[addressOfAdmin] = false;
        AdministratorsInformation (
            "Administrator role removed!",
            addressOfAdmin
        );
    }

    /**@dev Create a contract for the pledge agreement
      * @param depositAccount   Account number of the deposit account
      * @param creditAccount   Account number of the credit account
      * @return The address of the contract created
      */
    function createPledgeAgreement (string depositAccount, string creditAccount) onlyIfAdministrator(msg.sender) returns (PledgeAgreement) {
        PledgeAgreement newAgreement = new PledgeAgreement(depositAccount, creditAccount);
        AgreementCreated (
            "Pledge agreement created!",
            newAgreement
        );
        return newAgreement;
    }
}
