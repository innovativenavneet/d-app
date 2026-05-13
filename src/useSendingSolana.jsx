// Component for sending SOL tokens to another address
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";

export function SendSolana() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL
            })
        );
        try {
            await wallet.sendTransaction(transaction, connection);
            alert("Transaction successful! " + amount + " SOL sent to " + to);
        } catch (error) {
            console.error("Error sending transaction:", error);
            alert("Error sending transaction!");
        }
    }


    return (
        <div>
            <input id="to" type="text" placeholder="Recipient's Public Key" />
            <input id="amount" type="text" placeholder="Amount" />
            <button onClick={sendTokens}>Send SOL</button>
        </div>
    );
}