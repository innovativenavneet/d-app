// Component to display the current SOL balance of the connected wallet
import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
const {connection} = useConnection();
const wallet = useWallet();

async function getBalance() {
if(wallet.publicKey) {
    try {
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerHTML = "Balance: " + balance/LAMPORTS_PER_SOL + " SOL";
    } catch (error) {
        console.error("Error fetching balance:", error);
        document.getElementById("balance").innerHTML = "Error fetching balance!";
    }
}
    else {
        document.getElementById("balance").innerHTML = "Please connect your wallet!";
    }
}

getBalance();
return (
    <div>
        <p id="balance">sol balance :</p>
        <div id="balance">

        </div>
    </div>
);
}