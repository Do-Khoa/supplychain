import Web3 from 'web3';

const getWeb3 = () => new Promise((resolve, reject) => {
  window.addEventListener('load', async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } else if (window.web3) {
      resolve(new Web3(window.web3.currentProvider));
    } else {
      reject('No web3 provider found');
    }
  });
});

export default getWeb3;
