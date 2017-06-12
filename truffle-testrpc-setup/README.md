# Installation Guide

## Windows 10 [1]
*   Enable Windows subsystem for Linux.
    *   Follow this short guide on how to enable it [Installation Guide](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)
*   Open `Ubuntu Bash`
*   Install git if necessary
    *   `sudo apt-get update`
    *   `sudo apt-get install git`
*   Install npm from official repo
    *   `curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash`
    *   `sudo apt-get update -y && sudo apt-get upgrade -y`
*   Install the basics
    *   `sudo apt-get install -y build-essential python nodejs`
    *   `sudo npm install -g npm`
*   Install testrpc and truffle
    *   `sudo npm install -g ethereumjs-testrpc`
    *   `sudo npm install -g truffle`

## Issues
*   TestRPC permissons issues
    *   `chmod -R 777` on `/usr/lib/node_modules`
*   Permission error when installing Truffle
    *   Run `sudo npm install -g truffle@beta`

# Sources
1.  [How to install Truffle & TestRPC on Ubuntu or Windows 10 with “Windows subsystem for Linux”](https://davidburela.wordpress.com/2017/05/12/how-to-install-truffle-testrpc-on-ubuntu-or-windows-10-with-windows-subsystem-for-linux/)