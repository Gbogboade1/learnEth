import "dotenv/config"
import { ethers } from "ethers";

console.log('Private key', process.env.TEST_PRIVATE_KEY);
const wallet =new ethers.Wallet(process.env.TEST_PRIVATE_KEY);

console.log('address: ', wallet.address);
console.log('private key: ', wallet.privateKey);
console.log('mnemonic: ', wallet.mnemonic);

//Sign message
const signed = await  wallet.signMessage('Food');
console.log('sign food: ',signed);

//verify signer
console.log('verify message was signed by: ', ethers.verifyMessage('Food', signed));




