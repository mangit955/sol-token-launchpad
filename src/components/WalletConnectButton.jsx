"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const WalletConnectButton = () => (
  <div className="flex justify-center mt-6">
    <WalletMultiButton />
  </div>
);
