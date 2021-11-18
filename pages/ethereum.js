import { ethers, Contract } from 'ethers';
import NFT from '../contracts/NFT.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log('networkversion:', NFT.networks["4"])

        const nft = new Contract(
          NFT.networks["4"].address,
          NFT.abi,
          signer
        );

        resolve({nft});
      }
      resolve({nft: undefined});
    });
  });

export default getBlockchain;
