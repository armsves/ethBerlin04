"use server"

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import callViewMethod from 'mintbase-sdk-js/src'

export async function createUserNFT(address: string): Promise<Boolean> {
    
    const response = await callViewMethod({ contractId: "ethberlin04hack.mintspace3.testnet", method: "nft_tokens_for_owner", args: { account_id: address } });
    console.log(response);
    return true;

}