"use client";
import { useMbWallet } from "@mintbase-js/react";
import { callViewMethod } from '../../utils/utils'
import { useEffect, useState } from "react";

const EthBerlin04 = () => {
  const { isConnected, selector, connect, activeAccountId } = useMbWallet();
  const [nft, setNft] = useState("");

  const createUserNFT = async (address: string) => {
    const response = await fetch(`/api/ethberlin/${activeAccountId}`)
    const restResponse = await response.json();
    console.log('restResponse', restResponse);
  }

  const checkNFT = async (address: string) => {
    const response = await callViewMethod<{ metadata: { extra: string }, token_id: string }[]>({
      contractId: "ethberlin04hackaton.mintspace3.testnet",
      method: "nft_tokens_for_owner",
      args: { account_id: address }
    });
    setNft(response);
    console.log(response);
  }

  useEffect(() => {
    if (isConnected) {
      checkNFT(activeAccountId);
    }
  }, [isConnected]);

  return (
    <>
      <main className="pt-20 flex flex-col gap-6 items-center justify-center text-mainText">
        <div>EthBerlin 04</div>

        {isConnected ? (
          <>
            {nft.length > 0 ? ( nft.map(
              (nft) => (
                <div key={nft.token_id}>
                  Level {nft.metadata.extra.split(",").length}
                  <img src={nft.metadata.media} alt="nft" />
                </div>
              )
            
            ) ) : ( "no")}
            <button onClick={() => createUserNFT(activeAccountId)}>Create NFT</button>

          </>
        ) : (
          <button onClick={connect}> Login</button>
        )}


      </main>
    </>
  );
};

export default EthBerlin04;