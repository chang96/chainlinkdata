import dotenv from "dotenv";
dotenv.config();
import {ethers} from "hardhat"
async function main() {
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);
  
    const marketFeed = await ethers.deployContract("MarketData");
    await marketFeed.waitForDeployment();
    console.log("MarketFeed contract deployed to:", marketFeed.target);
  
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  