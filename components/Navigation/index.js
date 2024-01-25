import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: -1rem;
  width: 100%;
  margin-bottom: 1rem;
  background-image: url("/Rectangle.svg");
  background-size: cover;
  z-index: 1;
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  list-style: none;
  height: 14vh;
`;

const StyledListItem = styled.li`
  display: flex;
`;

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const StyledCreateLink = styled(Link)`
  background-color: #fafafa;
  border-radius: 100%;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-top: 0.2rem;
  align-self: flex-start;
  border: 0.1px solid lightgray;
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledUnorderedList>
        <StyledListItem>
          <StyledLink href="/">
            <Image src={"/home.svg"} width={60} height={60} alt="plant icon" />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledCreateLink href="/create">
            <Image
              src={"/add_circle.svg"}
              width={60}
              height={60}
              alt="plant icon"
            />
          </StyledCreateLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="/favourites">
            <Image
              src={"/white_plant.svg"}
              width={60}
              height={60}
              alt="plant icon"
            />
          </StyledLink>
        </StyledListItem>
      </StyledUnorderedList>
    </StyledNavigation>
  );
}
