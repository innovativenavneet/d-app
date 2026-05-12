//libraries imports
import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

//we have to wrap our connetion provvider with three providers
// connection provider , wallet provider , wallet model provider
function app() {
  //https://api.testnet.solana.com/
  const network = WalletAdapterNetwork.Testnet;
  const endpoint = "https://api.testnet.solana.com/";


  return (
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <WalletMultiButton />
      <WalletDisconnectButton />
      </div>
    </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
  );
}

export default app;
