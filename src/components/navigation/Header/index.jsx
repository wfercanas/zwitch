import { Text } from "../../data/Text";

import zwitchLogo from "../../../assets/zwitch-white.svg";
import { CartMajor, MobileHamburgerMajor } from "@shopify/polaris-icons";

import { StyledHeader, StyledLeftContainer, StyledNav } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <StyledLeftContainer>
        <MobileHamburgerMajor />
        <img src={zwitchLogo} alt="Zwitch" />
        <StyledNav>
          <ul>
            <li>
              <Text typo="labelLarge">Marcas</Text>
            </li>
            <li>
              <Text typo="labelLarge">Categorías</Text>
            </li>
            <li>
              <Text typo="labelLarge">Ofertas</Text>
            </li>
            <li>
              <Text typo="labelLarge">Pedidos</Text>
            </li>
          </ul>
        </StyledNav>
      </StyledLeftContainer>
      <CartMajor />
    </StyledHeader>
  );
}

export { Header };
