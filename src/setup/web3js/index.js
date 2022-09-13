import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import Web3 from "web3";

import {
    CONTRACT_ABI,
    CONTRACT_ADDRESS,
    CHAIN_ID
  } from "app/contracts/config";

const customNodeOptions = {
    rpcUrl: "https://rpc-mumbai.maticvigil.com/",
    chainId: CHAIN_ID,
};

export const POLYSCAN = "https://mumbai.polygonscan.com/tx";
export const OPENSEA = "https://testnets.opensea.io/assets/mumbai";

const magic = new Magic(`${process.env.REACT_APP_MAGIC_LINK_API_KEY}`, {
    network: customNodeOptions,
    locale: "en_US",
    extensions: [new ConnectExtension()],
});
const web3 = new Web3(magic.rpcProvider);

export function initSmartContract () {
    const contract = new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
      );

    return contract
}

export async function getTokenOwner(token){
  const contract = initSmartContract()
  const owner = await contract.methods.ownerOf(token).call();
  return owner;
}

export async function getOwnersNFT (cid) {
  const contract = initSmartContract()
  const owners = await contract.methods
  .getTokensCID(cid)
  .call();

  return owners;
}

export async function getMintedNFT (cid) {
  const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/nfts/?cid=${cid}&_sort=createdAt:DESC`;
  return fetch(endpoint, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

export async function getTxHistory (from, to, amount) {
  const contract = initSmartContract()
  // Generate filter options
  const options = {
    filter: {
      _from:  from,
      _to:    to,
      _value: amount
    },
    fromBlock: 'latest'
  }

  // Subscribe to Transfer events matching filter criteria
  return await contract.events.Transfer(options, async (error, event) => {
    if (error) {
      console.log(error)
      return
    }

    console.log('Found incoming Pluton transaction from ' + from + ' to ' + to + '\n');
    console.log('Transaction value is: ' + amount)
    console.log('Transaction hash is: ' + txHash + '\n')

    // Initiate transaction confirmation
    confirmEtherTransaction(event.transactionHash)

    return txHash
  })
}

