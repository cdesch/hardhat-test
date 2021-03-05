
// Solidity program to 
// demonstrate on how  
// to generate a random number 
pragma solidity ^0.7.0;

  
// Creating a contract 
contract RandomGen  { 
    
    // Intializing the state variable 
    uint randNonce = 0; 
    string public greeting = "hello";

    function greet() public view returns (string memory) {
      return greeting;
    }

    // Defining a function to generate 
    // a random number 
    function randMod(uint _modulus) public view  returns(uint)  
    { 
        // increase nonce 
        // randNonce++;   
        return uint(keccak256(abi.encodePacked(block.timestamp,  msg.sender,  randNonce))) % _modulus; 
    } 
}