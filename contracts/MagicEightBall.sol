pragma solidity ^0.7.0;
  
// Creating a contract 
contract MagicEightBall  { 
    

    // struct Person {
    //     address person; // person delegated to
    //     string fortune;
    // }
    event SetFortune(address sender, string fortune);

    // Intializing the state variable 
    uint randNonce = 0; 
    string public greeting = "hello";
    string[20] list_of_answers;
    address public owner;
    uint256 prediction_price = 690000000000000;

    // mapping(address => Person) public people;
    mapping(address => string) public fortunes;

    constructor() {
        owner = msg.sender;
        list_of_answers = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
        ];
    }

    function greet() public view returns (string memory) {
      return greeting;
    }

    function getAnswer() public payable { //returns (string memory) {
        require(msg.value > prediction_price, "must meet min fee");
        
        randNonce++;
        string memory answer = list_of_answers[randMod(list_of_answers.length)];
        fortunes[msg.sender] = answer;
        emit SetFortune(msg.sender, answer);
        // return answer;
    }

    function returnFortune() public view returns (string memory) {
        return fortunes[msg.sender];
    }

    // Defining a function to generate 
    // a random number 
    function randMod(uint _modulus) public view  returns(uint) { 
        // increase nonce 
        // randNonce++;   
        return uint(keccak256(abi.encodePacked(block.timestamp,  msg.sender,  randNonce))) % _modulus; 
    } 


    // function widthdraw () {
    //     emit Transfer(msg.sender,owner,20);
    // }
}