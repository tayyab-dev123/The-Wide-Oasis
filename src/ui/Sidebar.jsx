import styled from "styled-components";
import { MainNav } from "./MainNav";
import { Logo } from "../../public/Logo";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  color: black;
  padding: 3.2rem 4.8rem;
  border-right: 2px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};
