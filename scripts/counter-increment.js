// node  scripts/counter-increment.js

const hre = require("hardhat");
const ethers = hre.ethers;
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
//   const counter = await hre.ethers.contractFactory.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

const provider = new ethers.providers.JsonRpcProvider();
const blocknumber = await provider.getBlockNumber()
console.log("blocknumber", blocknumber.toString());
//   console.log("Counter Address:", counte.address)
//   const counter = await Counter.deploy();

//   await counter.deployed();

//   console.log("Counter deployed to:", counter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
