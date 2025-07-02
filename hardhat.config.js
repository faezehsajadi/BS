require("@nomicfoundation/hardhat-ethers");

module.exports = {
  solidity: "0.8.24", // یا یه رنج مثل { version: "0.8.24" }
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};