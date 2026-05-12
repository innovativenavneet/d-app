import {ed25519} from '@noble/curves/ed25519';
import {useWallet} from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
const {publocKey,signMessage} = useWallet();
const onClick = async () => {
    if(!publicKey){
        alert("Please connect your wallet!");
        return;
    }
    if(!signMessage){
        alert("Your wallet does not support message signing!");
        return;
    }
    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if(!ed25519.verify(signature,encodedMessage,publicKey.toBytes())){
        alert("Signature verification failed!");
        return ;
    }

    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if(!ed25519.verify(signature,encodedMessage,publicKey.toBytes())){
        alert("Signature verification failed!");
        return ;
    }
    alert("Message signed successfully! Signature: " + bs58.encode(signature));


};
return (    <div>
        <input id="message" type="text" placeholder="Enter message to sign" />
        <button onClick={onClick}>Sign Message</button>
    </div>
);
}
