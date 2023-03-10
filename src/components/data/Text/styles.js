import styled from "styled-components";
import { typography } from "../../../styles/typography";

const StyledText = styled.p`
  display: ${({ as }) => (as === "span" ? "inline" : "block")};
  font-family: ${typography.ref.typeface.brand};
  font-size: ${({ typo }) => typography.sys.typescale[typo].size};
  letter-spacing: ${({ typo }) => typography.sys.typescale[typo].tracking};
  line-height: ${({ typo }) => typography.sys.typescale[typo].lineHeight};
  font-weight: ${({ typo }) => typography.sys.typescale[typo].weight};
`;

export { StyledText };
