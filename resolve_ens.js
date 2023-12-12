import "dotenv/config"
import { ethers } from "ethers";

const url = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`
const provider = new ethers.JsonRpcProvider(url);
const wallet = new ethers.Wallet(process.env.TEST_PRIVATE_KEY, provider);




console.log('Current block number', await provider.getBlockNumber());
console.log('cr7.eth points to ', await provider.resolveName('cr7.eth'));
console.log('pushai.eth points to ', await provider.resolveName('pushai.eth'));
console.log('richa.eth points to ', await provider.resolveName('richa.eth'));
console.log('ayomide.eth points to ', await provider.resolveName('ayomide.eth'));


