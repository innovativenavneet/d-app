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
import { clusterApiUrl } from "@solan/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

//we have to wrap our connetion provvider with three providers
// connection provider , wallet provider , wallet model provider
function app() {
  const network = WalletAdapterNetwork.Devnet;
  return (
    <>
      <h1>hii navneet solana</h1>
    </>
  );
}

export default app;
