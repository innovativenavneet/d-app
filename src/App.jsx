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

// Import custom components
import { RequestAirdrop } from "./Airdrop.jsx";
import { SendSolana } from "./useSendingSolana.jsx";
import { ShowSolBalance } from "./useShowBalance.jsx";
import { SignMessage } from "./useSignMessage.jsx";

//we have to wrap our connection provider with three providers
// connection provider , wallet provider , wallet modal provider
function App() {
  //https://api.devnet.solana.com/
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = "http://127.0.0.1:8899";
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          {/* Render the custom Solana components */}
          <ShowSolBalance />
          <RequestAirdrop />
          <SendSolana />
          <SignMessage />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
