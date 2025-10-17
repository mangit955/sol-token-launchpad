"use client";

import { useState } from "react";

export default function TokenCreationForm() {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    decimals: "",
    freezeAuthority: "",
    initialSupply: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.Preventdefault();
    // TODO: Add validation and on-chain creation later
    console.log("Token Data:", formData);
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-xl text-white space-y-4 shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center"> Create token</h2>
      <div>
        <label className="block mb-1">name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handelChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Symbol</label>
        <input
          name="symbol"
          value={formData.symbol}
          onChange={handelChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Decimals</label>
        <input
          type="number"
          name="decimals"
          min={0}
          max={9}
          value={formData.decimals}
          onChange={handelChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Freeze Authority</label>
        <input
          name="freezeAuthority"
          value={formData.freezeAuthority}
          onChange={handelChange}
          placeholder="Public key (optional)"
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Initial Supply (optional)</label>
        <input
          type="number"
          name="initialSupply"
          value={formData.initialSupply}
          onChange={handelChange}
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
        />
      </div>

      <button
        type="Submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg mt-4"
      >
        Create Token
      </button>
    </form>
  );
}
