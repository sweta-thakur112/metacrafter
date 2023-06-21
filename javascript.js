const { ethers } = require("ethers");

async function main() {
  // Set up ethers.js provider and signer
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();

  // Specify the contract address
  const contractAddress = "CONTRACT_ADDRESS"; // Replace with the actual deployed contract address

  // Connect to the deployed contract
  const abi = [
    "function myDictionary(uint256) view returns (uint256, string memory)"
  ];
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Read the struct values
  const entry1 = await contract.myDictionary(1);
  const entry2 = await contract.myDictionary(2);

  console.log("Entry 1:", entry1);
  console.log("Entry 2:", entry2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
