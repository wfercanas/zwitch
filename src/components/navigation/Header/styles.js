import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledHeader = styled.header`
  height: 60px;
  padding: 0px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.ref.palette.neutral.n900};
  color: ${colors.ref.palette.neutral.n10};
  box-shadow: 0px 1px 8px 1px ${colors.ref.palette.neutralAlpha.n100a};

  & > svg {
    width: 20px;
    fill: ${colors.ref.palette.neutral.n10};
  }
`;

const StyledLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  & svg {
    width: 20px;
    fill: ${colors.ref.palette.neutral.n10};
  }

  & img {
    height: 36px;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 600px) {
    & > svg {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    & ul {
      display: none;
    }
  }
`;

const StyledNav = styled.nav``;

export { StyledHeader, StyledLeftContainer, StyledNav };
