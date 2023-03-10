import { StyledText } from "./styles";

function Text(props) {
  const { children, as = "p", typo = "bodyLarge" } = props;
  return (
    <StyledText as={as} typo={typo}>
      {children}
    </StyledText>
  );
}

export { Text };
