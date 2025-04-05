import dotenv from "dotenv";
dotenv.config();
import { ethers } from "ethers";
import {abi} from "./abi.json"

const contractAddress = process.env.CONTRACT_ADDRESS!
const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL!);
const contract = new ethers.Contract(contractAddress, abi, provider);

async function fetchETHPrice() {
  try {
    const price = await contract.getPrice();
    console.log(ethers.formatUnits(price, 8))
    return ethers.formatUnits(price, 8)
  } catch (error) {
    console.error("Error fetching price:", error);
  }
}

fetchETHPrice();
