import { Contract, ethers, providers } from 'ethers';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../helpers/constants';
import { wallet } from '../helpers/wallet';
import { IComment } from '../types/Comment';
import { MainContainer, PageContainer, Footer } from '../styles/styles';
import { Video } from '../components/Video';
import { Form } from '../components/Form';
import { Comment } from '../components/Comment';

export default function Home(): JSX.Element {
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [comments, setComments] = useState<IComment[]>([]);

  /**
   * Event handler for name input change.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   * @returns {void} - Returned void function
   */
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  /**
   * Event handler for message textarea change.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   * @returns {void} - Returned void function
   */
  const onMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMessage(event.target.value);
  };

  /**
   * Event handler for tip creator button click.
   * @returns {void} - Returned void function
   */
  const handleTipCreator = (): void => {
    wallet.tipCreator(name, message, setName, setMessage);
  };

  /**
   * Event handler for connect wallet button click.
   * @returns {void} - Returned void function
   */
  const handleConnectWallet = (): void => {
    wallet.connectWallet(setCurrentAccount);
  };

  /**
   * Async function to fetch comments from blockchain
   * @returns {Promise<void>} - Returned void function
   */
  const getComments = async (): Promise<void> => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tipCreator = new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          signer
        );

        console.log('fetching comments from the blockchain..');
        const comments = await tipCreator.getComments();
        console.log('fetched!');
        setComments(comments);
      } else {
        console.log('Metamask is not connected');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
    /**
     * Event handler for new comment events.
     * @param {string} from - The address of the commenter.
     * @param {string} timestamp - The timestamp of the comment.
     * @param {string} name - The name of the commenter.
     * @param {string} message - The comment message.
     * @returns {void}
     */
    const onNewComment = (
      from: string,
      timestamp: string,
      name: string,
      message: string
    ): void => {
      console.log('Comment received: ', from, timestamp, name, message);
      setComments((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: timestamp,
          message,
          name,
        },
      ]);
    };

    const { ethereum } = window;

    if (ethereum) {
      const provider = new providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const tipContentCreator = new Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      tipContentCreator.on('NewComment', onNewComment);

      return () => {
        tipContentCreator.off('NewComment', onNewComment);
      };
    }
  }, []);

  return (
    <PageContainer>
      <Head>
        <title>Cronos Accelerators 2023 - Workshop</title>
        <meta name="description" content="Tipping site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Video
          currentAccount={currentAccount}
          handleConnectWallet={handleConnectWallet}
        />
        {currentAccount && (
          <Form
            onNameChange={onNameChange}
            onMessageChange={onMessageChange}
            handleTipCreator={handleTipCreator}
          />
        )}
        <Comment comments={comments} />
      </MainContainer>
      <Footer>
        <a href="https://cronos.org" target="_blank" rel="noopener noreferrer">
          Cronos Accelerator 2023
        </a>
      </Footer>
    </PageContainer>
  );
}
