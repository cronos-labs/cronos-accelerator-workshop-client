import { ethers } from 'ethers';
import { common } from './common';
import { IComment } from '../types/Comment';

export const wallet = {
  /**
   * Checks if the wallet is connected to MetaMask.
   * @returns {Promise<void>} A Promise that resolves with no value.
   */
  isWalletConnected: async (): Promise<void> => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Please install MetaMask');
        return;
      }

      const accounts = (await ethereum.request({
        method: 'eth_accounts',
      })) as string[];

      console.log('accounts: ', accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log('Wallet is connected! ' + account);
      } else {
        console.log('Make sure MetaMask is connected');
      }
    } catch (error) {
      common.handleError(error as Error);
    }
  },

  /**
   * Connects the wallet to MetaMask and updates the state with the connected account.
   * @param {Function} setState - A function to update the state.
   * @returns {Promise<void>} A Promise that resolves with no value.
   */
  connectWallet: async (
    setState: (value: React.SetStateAction<string>) => void
  ): Promise<void> => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Please install MetaMask');
        return;
      }

      const accounts = (await ethereum.request({
        method: 'eth_requestAccounts',
      })) as string[];

      setState(accounts[0]);
    } catch (error) {
      common.handleError(error as Error);
    }
  },

  /**
   * Tips a content creator.
   * @param {string} name - The name of the content creator.
   * @param {string} message - The message for the tip.
   * @param {Function} setName - A function to update the name state.
   * @param {Function} setMessage - A function to update the message state.
   * @returns {Promise<void>} A Promise that resolves with no value.
   */
  tipCreator: async (
    name: string,
    message: string,
    setName: (value: React.SetStateAction<string>) => void,
    setMessage: (value: React.SetStateAction<string>) => void
  ): Promise<void> => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Please install MetaMask');
        return;
      }

      const contract = common.getContractInstance(ethereum);

      console.log('Tipping content creator...');
      const tipTxn = await contract.tipCreator(
        name || 'ric',
        message || 'Review the content!',
        { value: ethers.utils.parseEther('1') }
      );

      await tipTxn.wait();

      console.log('Mined', tipTxn.hash);
      console.log('Content creator tipped!');

      // Clear the form fields.
      setName('');
      setMessage('');
    } catch (error) {
      common.handleError(error as Error);
    }
  },

  /**
   * Gets the comments from the blockchain.
   * @param {Function} setState - A function to update the state with the comments.
   * @returns {Promise<void>} A Promise that resolves with no value.
   */
  getComments: async (
    setState: (value: React.SetStateAction<IComment[]>) => void
  ): Promise<void> => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Metamask is not connected');
        return;
      }

      const contract = common.getContractInstance(ethereum);

      console.log('Fetching comments from the blockchain...');
      const comments = await contract.getComments();
      console.log('Fetched!');
      setState(comments);
    } catch (error) {
      common.handleError(error as Error);
    }
  },
};
