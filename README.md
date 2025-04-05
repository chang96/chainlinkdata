# Partnr-Chainlink-Task

This project implements a **get price action** using Solidity. Users can **get ethusd prices** from chainlink oracle.

## 🚀 Features

- **getPrice** get price
- **Interact using Ethers.js**.

## Setup

### Clone the Repository
```sh
git clone https://github.com/chang96/chainlinkdata
cd chainlinkdata
```

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add:
```sh
SEPOLIA_RPC_URL=""
PRIVATE_KEY=""
CONTRACT_ADDRESS=""
```

## Deployment
To deploy the contract to a testnet (e.g., Sepolia):
```sh
npx hardhat run scripts/deploy.ts --network sepolia
```

## Interaction with the Smart Contract

Use **Ethers.js** to interact with the contract. The functions are located in `etherjs-sample.ts`.

### Available Functions (in `etherjs-sample.ts`):

- **getPrice**: `getPrice()`

## Testing


## License

MIT

