### Batch Transfer Token

The function `batchTransferToken` transfers a specific type of ERC20 token from a single address to multiple addresses.

# BatchTransferContract.sol

## Methods

---

### Batch Transfer

The function `batchTransfer` transfers ethers from a single address to multiple addresses.

### Batch Transfer Multi Token

The function `batchTransferMultiTokens` transfers multiple ERC20 tokens to multiple addresses.

### Batch Transfer Token

The function `batchTransferToken` transfers single tokens (ERC20) to multiple addresses.

### Batch Transfer Combined Multi Tokens

The function `batchTransferCombinedMultiTokens` transfers multiple ERC20 tokens and ethers to multiple addresses.

## Requirements to run this repository

---

You can compile, run tests and deploy this smart contract with Hardhat.

- [Node.js](https://nodejs.org/download/release/v16.10.0/): `>=16.0.0`

- [Hardhat](https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades): `v2.12.2`

## Usage

---

Clone or download this repository.

Go to path and run on terminal:

```sh

npm install

```

After running, all the dependencies will be downloaded.

You can also install hardhat as a global dependency by running:

```sh

npm install --save-dev hardhat

```

### Pre-requsites

---

Create .env file:

```

cp .env.template .env

```

Edit the below contents in .env file:

mainnet=https://mainnet.infura.io/v3/`Infura key`

PRIVATE_KEY=`Wallet Private Key`

API_key= `EtherScan API key`

### Compile contracts

---

```sh

npx hardhat compile

```

After running, contract information including ABI will be available in the `artifacts/` directory.

### Run tests on Hardhat

---

You can run test-cases which can be found in the test directory `BatchContractHardhat/test` by running on the terminal:

```sh

npx hardhat test

```

---

**NOTE:**
_Kindly move the ‘Token.sol’ file from the ‘test’ folder to the ‘contracts’ folder while testing._

### Run migration and deploy contracts

---

Run deploy command:

```sh

npx hardhat run scripts/deploy.ts --network <network_name> // mainnet, rinkeby, goerli...

```

## Licence

---

SPDX-License-Identifier: MIT

###
