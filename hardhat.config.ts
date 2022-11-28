import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const Goerli_URL = process.env.Goerli;
const Private_key = process.env.PRIVATE_KEY as string;
const apikey = process.env.API_Key as string;

console.log("URL", Goerli_URL);

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: Goerli_URL || "",
      accounts: [Private_key],
    },
  },
  etherscan: {
    apiKey: apikey,
  },
};

export default config;
