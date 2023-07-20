import { ethers } from 'ethers';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './constants';

export const common = {
  /**
   * Converts a number or string representing a date and time to the format "dd.mm.yyyy at hh.mm".
   * @param {number | string} timestamp - The number or string representing the date and time.
   * @returns {string} The formatted date and time string.
   */
  formatDate: (timestamp: string): string => {
    const timestampInSeconds = parseInt(timestamp, 10);
    const dateObj = new Date(timestampInSeconds * 1000);

    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    const formattedDate = `${day}.${month}.${year}`;
    const formattedTime = `${hours}.${minutes}`;

    return ` ${formattedDate} at ${formattedTime}`;
  },

  /**
   * Creates an instance of the contract using the provided Ethereum provider.
   * @param {ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc} provider The Ethereum provider.
   * @returns {ethers.Contract} The contract instance.
   */
  getContractInstance: (
    provider:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  ): ethers.Contract => {
    const web3Provider = new ethers.providers.Web3Provider(provider, 'any');
    const signer = web3Provider.getSigner();
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );
    return contract;
  },

  /**
   * Handles an error by logging it to the console.
   * @param {Error} error - The error object to handle.
   * @returns {void} - The returned void function
   */
  handleError: (error: Error): void => {
    console.log(error);
  },
};
