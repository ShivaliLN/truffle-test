var contractABI = [];
var contractAddress = '0x264fBCC3bAA8688bc705E41E0777a90C6a02577c';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);
