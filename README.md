# Lock Smart Contract Project

## Overview
This project implements a simple `Lock` smart contract using Hardhat on a local Ethereum network. The contract allows locking Ether until a specified unlock time, with withdrawal restricted to the owner. It serves as a foundational example for learning blockchain development, smart contract deployment, and testing.

## Functionality
- **Lock Mechanism**: Locks Ether for a set duration (e.g., 1 hour) defined during deployment.
- **Owner-Only Withdrawal**: Only the contract deployer (owner) can withdraw funds after the unlock time.
- **Time Verification**: Ensures funds are accessible only after the predefined unlock period.

## How to Use
1. **Prerequisites**: Ensure Node.js and Git are installed.
2. **Setup**:
   - Clone the repository: `git clone https://github.com/faezehsajadi/BS.git`
   - Install dependencies: `npm install`
   - Compile the contract: `npx hardhat compile`
3. **Run the Local Network**: `npx hardhat node`
4. **Deploy the Contract**: `npx hardhat run scripts/deploy.js --network hardhat`
5. **Test the Contract**: `npx hardhat test`

## Applications
- **Crowdfunding**: Lock funds until a campaign goal is met or a deadline passes.
- **Escrow Services**: Hold payments securely until conditions (e.g., delivery) are fulfilled.
- **Time-Locked Wallets**: Create wallets where access is restricted until a future date.
- **Educational Purposes**: A practical example for learning Solidity and Hardhat.

## Development and Extension
This project is extensible and can be enhanced based on your needs:
- **Multi-Owner Support**: Add multi-signature functionality for shared control.
- **Additional Features**: Implement functions like `addFunds` or partial withdrawals.
- **Real Network Deployment**: Configure `hardhat.config.js` for testnets (e.g., Sepolia) or Mainnet with an API key (e.g., Infura).
  - Example:
    ```javascript
    module.exports = {
      solidity: "0.8.24",
      networks: {
        hardhat: {},
        sepolia: {
          url: "https://sepolia.infura.io/v3/YOUR_API_KEY",
          accounts: ["YOUR_PRIVATE_KEY"]
        }
      }
    };