import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import { LAMPORtS_PER_SOL } from "@solana/web3.js";

export function ShowSolBalance() {
const {connection} = useConnection();
const wallet = useWallet();

async function getBalance() {
if(wallet.publicKey) {
    const balance = await connection.getBalance(wallet.publicKey);
    document.getElementById("balance").innerHTML = "Balance: " + balance/LAMPORtS_PER_SOL + " SOL";
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