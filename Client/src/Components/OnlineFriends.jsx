import React, { useState } from "react";
import styled from "styled-components";
import { Users } from "../Data/UserData";
import { Link } from "react-router-dom";

const Image = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: cover;
  cursor: pointer;
  object-fit: cover;
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
  position: relative;
  font-weight: bold;
  cursor: pointer;
`;
const GreenDot = styled.span`
  width: 16px;
  height: 16px;
  position: absolute;
  background-color: #13f113;
  border: 2px solid white;
  border-radius: 50%;
  top: 0;
  left: 25px;
`;
const ProfileLink = styled(Link)`
  text-decoration: none;
  gap: 10px;
  color: black;
  display: flex;
  align-items: center;
`;
const OnlineFriends = () => {
  const [users] = useState(Users);
  return (
    <SideLinks>
      {users.map((u) => {
        const { id, username, profilePicture } = u;

        return (
          <SideLink key={id}>
            <ProfileLink to={`/profile/:${username}`}>
              <Image src={`/assets/${profilePicture}`} />
              <GreenDot />
              <span>{username}</span>
            </ProfileLink>
          </SideLink>
        );
      })}
    </SideLinks>
  );
};

export default OnlineFriends;
