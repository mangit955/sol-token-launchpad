"use client";

import { useWallet } from "@solana/wallet-adapter-react";

export function WalletInfo() {
  const { publickey } = useWallet();

  return (
    <div className="mt-4">
      {publickey ? (
        <p>Connected: {publickey.toBase58()}</p>
      ) : (
        <p>Not connected</p>
      )}
    </div>
  );
}
