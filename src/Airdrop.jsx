// Component for requesting SOL airdrop on Solana testnet
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import{LAMPORTS_PER_SOL} from "@solana/web3.js";

export function RequestAirdrop() {
const wallet = useWallet();
const {connection} = useConnection();

console.log("wallet:", wallet);
console.log("connection:", connection);
async function requestAirdrop() {
    let amount = document.getElementById("amount").value;
   try {
       await connection.requestAirdrop(wallet.publicKey, amount*LAMPORTS_PER_SOL);
       alert("Airdrop requested successfully!" + amount + " SOL to " + wallet.publicKey.toBase58());
   } catch (error) {
       console.error("Error requesting airdrop:", error);
       alert("Error requesting airdrop!");
   }
};

return (
    <div>
        <br />
        <br />
        <input id="amount" type="text" placeholder="Amount" />
        <button onClick={requestAirdrop}>Request Airdrop</button>
    
    </div>
);


}