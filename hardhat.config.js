require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.17"
  solidity: {
    compilers: [{ version: "0.8.17" }, { version: "0.6.6" }]
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }

}
