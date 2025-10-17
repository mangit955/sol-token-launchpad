// src/components/WalletDashboard.js
"use client"; // client component

import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";
import { WalletInfo } from "./WalletInfo";

export function WalletDashboard() {
  return (
    <div className="p-6 bg-gray-900 text-white">
      <WalletConnectButton />
      <WalletInfo />
    </div>
  );
}
