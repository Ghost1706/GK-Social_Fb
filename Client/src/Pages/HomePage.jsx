import React from "react";
import Navbar from "../Components/Navbar";
import Feed from "../Components/Feed";
import SideBar from "../Components/Sidebar";
import RightBar from "../Components/RightBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <SideBar />
        <Feed />
        <RightBar />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
