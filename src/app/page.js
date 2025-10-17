"use client";

import { WalletConnectButton } from "../components/WalletConnectButton";
import { WalletInfo } from "../components/WalletInfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-6">🪙 Sol Launchpad</h1>
      <WalletConnectButton />
      <WalletInfo />
    </main>
  );
}
