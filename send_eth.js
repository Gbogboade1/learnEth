import "dotenv/config"
import { ethers } from "ethers";


const url = `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`
const provider = new ethers.JsonRpcProvider(url);

const wallet = new ethers.Wallet(process.env.TEST_PRIVATE_KEY, provider);
wallet.connect(provider)

const myBalance = await provider.getBalance('0x137EFA54575a42F67d712D36519559193f972502');

const result = await wallet.sendTransaction({
    to: '0xD3FD4422210E69Fe8cD790a546Cbb5d7DCe904Ce',
    value: myBalance / BigInt(100),
});
console.log('Transaction result: ', result);
