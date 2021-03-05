const { expect } = require("chai");

describe("MagicEightBall", function() {
  it("Should return the new greeting once it's changed", async function() {

    const MagicEightBall = await ethers.getContractFactory("MagicEightBall");
    const greeter = await MagicEightBall.deploy();
    
    await greeter.deployed();
    // expect(await greeter.greet()).to.equal("Hello, world!");

    // await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("hello");

    // expect(await greeter.randMod(10)).to.equal("hello");
    // randMod
    const maxNumber = 100;
    const result = await greeter.randMod(maxNumber);
    console.log("result", result.toString());

    let overrides = {
        // To convert Ether to Wei:
        value: ethers.utils.parseEther("1.0")     // ether in this case MUST be a string

        // Or you can use Wei directly if you have that:
        // value: someBigNumber
        // value: 1234   // Note that using JavaScript numbers requires they are less than Number.MAX_SAFE_INTEGER
        // value: "1234567890"
        // value: "0x1234"

        // Or, promises are also supported:
        // value: provider.getBalance(addr)
    };

    expect(result.toNumber()).to.be.below(maxNumber);

    const answer = await greeter.getAnswer(overrides);
    console.log("answer", answer);
    const new_answer = await greeter.returnFortune();
    console.log("new answer", new_answer);

  });
});
