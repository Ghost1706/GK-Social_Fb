import React, { useState } from "react";
import styled from "styled-components";
import { Users } from "../Data/UserData";
import { Link } from "react-router-dom";

const Container = styled.section`
  flex: 2.5;
  padding: 20px 5px;
`;
const UserInfo = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.h6`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
`;
const TextOne = styled.p`
  color: #505050;
  font-weight: 400;
  margin-bottom: 10px;
`;
const TextTwo = styled.span`
  color: #4e4e4ed1;
  font-weight: 200;
`;
const FriendWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  cursor: pointer;

  justify-content: start;
`;
const Friend = styled(Link)`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  gap: 5px;
  color: black;
  width: 30%;
  margin-bottom: 10px;
  margin-right: 5px;
`;
const FriendImage = styled.img`
  border-radius: 5px;
  object-fit: cover;
  height: 100px;
  background-size: cover;
  width: 100px;
`;
const FriendText = styled.p`
  font-size: 14px;
`;
const ProfileRightBar = () => {
  const [users] = useState(Users);
  return (
    <Container>
      <UserInfo>
        <Title>User Information</Title>
        <TextOne>
          City: <TextTwo>New York</TextTwo>
        </TextOne>
        <TextOne>
          From: <TextTwo>Madrid</TextTwo>
        </TextOne>
        <TextOne>
          Relationship: <TextTwo>Single</TextTwo>
        </TextOne>
      </UserInfo>
      <Title>User Friends</Title>
      <FriendWrapper>
        {users.map((u) => {
          const { id, profilePicture, username } = u;
          return (
            <Friend key={id} to={`/profile/:${username}`}>
              <FriendImage src={`/assets/${profilePicture}`} alt={username} />
              <FriendText>{username}</FriendText>
            </Friend>
          );
        })}
      </FriendWrapper>
    </Container>
  );
};

export default ProfileRightBar;
