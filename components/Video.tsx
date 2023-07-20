import Image from 'next/image';
import logo from '../assets/cronos.png';
import {
  VideoWrapper,
  VideoTitle,
  VideoContainer,
  VideoLogo,
  CreatorContainer,
  CreatorName,
  CreatorSubscribers,
  ConnectToWallet,
} from '../styles/styles';

interface Props {
  currentAccount: string;
  handleConnectWallet: () => void;
}

export function Video({
  currentAccount,
  handleConnectWallet,
}: Props): JSX.Element {
  return (
    <>
      <VideoWrapper>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </VideoWrapper>
      <VideoTitle>Cronos Accelerator 2023 - Workshop</VideoTitle>
      <VideoContainer>
        <VideoLogo>
          <Image src={logo} width={40} height={40} alt="logo" />
        </VideoLogo>
        <CreatorContainer>
          <CreatorName>Ric Arcifa</CreatorName>
          <CreatorSubscribers>435 subscribers</CreatorSubscribers>
        </CreatorContainer>
        {!currentAccount ? (
          <ConnectToWallet onClick={handleConnectWallet}>
            Connect
          </ConnectToWallet>
        ) : (
          <ConnectToWallet>Disconnect</ConnectToWallet>
        )}
      </VideoContainer>
    </>
  );
}
