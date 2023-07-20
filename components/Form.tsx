import {
  FormContainer,
  FormGroup,
  Input,
  TipCreator,
  TipCreatorButtonArea,
} from '../styles/styles';

interface Props {
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTipCreator: () => void;
}

export function Form({
  onNameChange,
  onMessageChange,
  handleTipCreator,
}: Props): JSX.Element {
  return (
    <FormContainer>
      <FormGroup>
        <Input
          id="name"
          type="text"
          placeholder="Type your name"
          onChange={onNameChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="message"
          type="text"
          placeholder="Review the content!"
          onChange={onMessageChange}
          required
        ></Input>
      </FormGroup>
      <TipCreatorButtonArea>
        <TipCreator type="button" onClick={handleTipCreator}>
          Send & Tip
        </TipCreator>
      </TipCreatorButtonArea>
    </FormContainer>
  );
}
