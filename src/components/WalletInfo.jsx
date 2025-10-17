"use client";

import { useWallet } from "@solana/wallet-adapter-react";

export function WalletInfo() {
  const { publicKey, connected } = useWallet();

  return (
    <div className="mt-4 text-sm text-gray-200">
      {connected && publicKey ? (
        <p>
          Connected:&nbsp;
          <span className="font-mono text-green-400">
            {publicKey.toBase58().slice(0, 6)}...
            {publicKey.toBase58().slice(-4)}
          </span>
        </p>
      ) : (
        <p className="text-gray-500">Not connected</p>
      )}
    </div>
  );
}
