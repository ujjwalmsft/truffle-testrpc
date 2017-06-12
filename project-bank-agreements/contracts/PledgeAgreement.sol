pragma solidity ^0.4.7;

contract PledgeAgreement {
    /*
    * @title Pledge Agreement
    * @author Dr. Dolittle
    * @notice Logic of the pledge agreement
    */

    // Variables
    string depositAccount; // Source
    string creditAccount;// Destination

    // Events
    event CheckOutputEvent (
        string message,
        string depositAccount,
        string creditAccount,
        address contractAddress
    );

    event Debt (
        string message,
        string depositAccount,
        string creditAccount,
        uint amount,
        address contractAddress
    );

    // Constructor
    function PledgeAgreement (string _depositAccount, string _creditAccount) {
        depositAccount = _depositAccount;
        creditAccount = _creditAccount;
        checkInput(depositAccount, creditAccount);
    }

    // Functions
    /**@dev Check initial arguments
      * @param depositAccount   Account number of the deposit account
      * @param creditAccount   Account number of the credit account
      */
    function checkInput (string depositAccount, string creditAccount) private {
        bytes memory depositAccountBytes = bytes(depositAccount);
        bytes memory creditAccountBytes = bytes(creditAccount);
        if (depositAccountBytes.length == 0 || creditAccountBytes.length == 0) {
            throw;
        }
        CheckOutputEvent (
            "Pledege Agreement created!",
            depositAccount,
            creditAccount,
            this
        );
    }

    /**@dev Indicate open debt / payments not received on time
      * @param amountDebt   Amount not received
      * @return The amount of debt
      */
    function openDebt (uint amountDebt) returns (uint) {
        if (amountDebt <= 0) {
            throw;
        }

        Debt (
            "Payment not arrived - debt created!",
            depositAccount,
            creditAccount,
            amountDebt,
            this
        );
        return amountDebt;
    }

    /**@dev Create a contract for the pledge agreement
      * @return depositAccount   Account number of the deposit account
      * @return creditAccount   Account number of the credit account
      */
    function getInformation () returns (string deposit, string credit) {
        deposit = depositAccount;
        credit = creditAccount;
    }
}