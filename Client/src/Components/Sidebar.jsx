import React, { useState } from "react";
import styled from "styled-components";
import CloseFriend from "./CloseFriend";
import { Link } from "react-router-dom";
import { SideBarData } from "../Data/SIdeBarData";

const Container = styled.div`
  flex: 2;
  padding: 15px;
  position: sticky;
  overflow-y: scroll;
  left: 0;
  top: 50px;
  bottom: 0;
  height: calc(100vh - 60px);
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }
`;
const Wrapper = styled.div`
  padding: 5px 10px;
`;
const SideLinks = styled.ul`
  list-style: none;
  padding: 0;
`;
const SideLink = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 17px;
  cursor: pointer;
`;
const SLink = styled(Link)`
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 1px;
  color: black;
  font-size: 16px;
`;
const Btn = styled.button`
  color: black;
  padding: 8px 25px;
  background-color: #bebebe8c;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`;
const HR = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  height: 2px;
  background-color: #bebebe8c;
`;

const Sidebar = () => {
  const [Data] = useState(SideBarData);
  return (
    <Container>
      <Wrapper>
        <SideLinks>
          {Data.map((item) => {
            const { id, PathName, Path, Icon } = item;
            return (
              <SideLink key={id}>
                <span>{Icon}</span>
                <SLink to={`${Path}`}>{PathName}</SLink>
              </SideLink>
            );
          })}
        </SideLinks>
        <Btn>Show More</Btn>
        <HR></HR>
        <CloseFriend />
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
