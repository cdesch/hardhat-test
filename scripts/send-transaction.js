// node  scripts/send-transaction.js

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

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
const blocknumber = await provider.getBlockNumber();
console.log("blocknumber", blocknumber.toString());

const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
const account_balance = await provider.getBalance("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");
console.log("account_balance", account_balance.toString());
tx = {
  to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
  value: ethers.utils.parseEther("5"),
  gasLimit: 9500000,
  gasPrice: "0x07f9acf02",
}

await wallet.sendTransaction(tx).then((signedTX)=>{
    console.log("signedTX", signedTX);
    // customHttpProvider.sendTransaction(signedTX).then(console.log);
});

const account_balance2 = await provider.getBalance("0x70997970c51812dc3a010c7d01b50e0d17dc79c8");

console.log("account_balance2", account_balance2.toString());

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
