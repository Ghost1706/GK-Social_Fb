import React from "react";
import Navbar from "../Components/Navbar";
import Feed from "../Components/Feed";
import SideBar from "../Components/Sidebar";

import styled from "styled-components";
import ProfileRightBar from "../Components/ProfileRightBar";
import ProfileImage from "../Components/ProfileImage";
const Container = styled.div`
  display: flex;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex: 6.5;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Profile = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <SideBar />
        <ProfileWrapper>
          <ProfileImage />
          <Wrapper>
            <Feed />
            <ProfileRightBar />
          </Wrapper>
        </ProfileWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
