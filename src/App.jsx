import { useState } from "react";
import { ethers } from "ethers";

export default function RootDegenApp() {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      setConnected(true);
    } else {
      alert("Metamask not found");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">ROOTDEGEN DApp</h1>
      <button onClick={connectWallet}>
        {connected ? "Wallet Connected" : "Connect Wallet"}
      </button>
    </div>
  );
}
