import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #4776f7;
  height: 50px;
  padding: 8px 13px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  flex: 2.2;
`;
const SearchBar = styled.div`
  background-color: white;
  color: #111111e2;
  padding: 5px;
  flex: 3.5;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
const Search = styled.input`
  background-color: transparent;
  color: #0f0f0fd8;
  width: 100%;
  border: none;
  &:focus-visible {
    outline: 0;
  }
`;
const RightNav = styled.div`
  display: flex;
  flex: 2.9;
  justify-content: space-around;
`;
const RLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const RLeftText = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0 5px;
  color: white;
`;
const RCenter = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const RRightImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-size: cover;
  cursor: pointer;
  object-fit: cover;
`;
const BContainer = styled.div`
  position: relative;
`;
const Badge = styled.span`
  position: absolute;
  color: white;
  background-color: red;
  border-radius: 50%;
  font-size: 0.7em;
  top: -4px;
  left: 15px;
  padding: 1px 1.2px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Title to={"/"}>Greg-book</Title>
        <SearchBar>
          <SearchIcon />
          <Search placeholder="Search for friend, post or video" />
        </SearchBar>
        <RightNav>
          <RLeft>
            <RLeftText>Homepage</RLeftText>
            <RLeftText>Timeline</RLeftText>
          </RLeft>
          <RCenter>
            <BContainer>
              <PersonIcon />
              <Badge>2</Badge>
            </BContainer>
            <BContainer>
              <MessageIcon />
              <Badge>5</Badge>
            </BContainer>
            <BContainer>
              <NotificationsIcon />
              <Badge>7</Badge>
            </BContainer>
          </RCenter>
          <RRightImage src="/assets/person/8.jpeg" />
        </RightNav>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
