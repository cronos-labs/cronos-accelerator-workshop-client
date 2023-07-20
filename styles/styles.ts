import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.main`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const VideoWrapper = styled.div`
  iframe {
    border: none;
    border-radius: 10px;
    width: 520px;
    height: 315px;
  }
`;

export const VideoTitle = styled.div`
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const VideoLogo = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CreatorName = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const CreatorSubscribers = styled.div`
  font-size: 12px;
  color: #606060;
`;

export const ConnectToWallet = styled.button`
  padding: 0 16px;
  height: 36px;
  font-size: 14px;
  border-radius: 18px;
  border: none;
  background: black;
  color: white;
  margin-left: auto;
  cursor: pointer;
`;

export const TipCreatorButtonArea = styled.div`
  justify-content: end;
  display: flex;
`;

export const TipCreator = styled.button`
  padding: 0 16px;
  height: 36px;
  font-size: 14px;
  border-radius: 18px;
  border: none;
  background: #085ed4;
  color: white;
  margin-left: auto;
  cursor: pointer;
`;

export const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  width: 100%;
  outline: none;
`;

export const Textarea = styled.textarea`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  width: 100%;
  outline: none;
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const CommentsTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

export const CommentsContainer = styled.form`
  margin-top: 20px;
`;

export const Comments = styled.div`
  border-radius: 15px;
  padding: 14px;
  background: #f3f3f3;
  margin-bottom: 10px;
`;

export const CommentRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 10px;
`;

export const CommentUserName = styled.div`
  font-weight: 500;
`;

export const CommentDate = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: gray;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;
