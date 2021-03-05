const { expect } = require("chai");

describe("RandomGen", function() {
  it("Should return the new greeting once it's changed", async function() {
    const RandomGen = await ethers.getContractFactory("RandomGen");
    const greeter = await RandomGen.deploy();
    
    await greeter.deployed();
    // expect(await greeter.greet()).to.equal("Hello, world!");

    // await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("hello");

    expect(await greeter.greet()).to.equal("hello");
    // expect(await greeter.randMod(10)).to.equal("hello");
    // randMod
    const maxNumber = 100;
    const result = await greeter.randMod(maxNumber);
    console.log("result", result.toString());
    expect(result.toNumber()).to.be.below(maxNumber);

  });
});
