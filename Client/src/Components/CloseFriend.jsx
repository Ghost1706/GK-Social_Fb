import React, { useState } from "react";
import styled from "styled-components";
import { Users } from "../Data/UserData";
import { Link } from "react-router-dom";

const Image = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-size: cover;
  cursor: pointer;
  object-fit: cover;
`;
const SideLinks = styled.ul`
  list-style: none;
  padding: 0;
`;
const SideLink = styled.li`
  margin-bottom: 17px;
  cursor: pointer;
`;
const ProfileLink = styled(Link)`
  text-decoration: none;
  gap: 10px;
  color: black;
  display: flex;
  align-items: center;
`;
const CloseFriend = () => {
  const [users] = useState(Users);
  return (
    <SideLinks>
      {users.map((u) => {
        const { id, username, profilePicture } = u;

        return (
          <SideLink key={id}>
            <ProfileLink to={`/profile/:${username}`}>
              <Image src={`/assets/${profilePicture}`} />
              <span>{username}</span>
            </ProfileLink>
          </SideLink>
        );
      })}
    </SideLinks>
  );
};

export default CloseFriend;
