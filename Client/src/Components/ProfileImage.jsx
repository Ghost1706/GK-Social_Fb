import React from "react";
import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  margin-bottom: 100px;
`;
const ProImage = styled.img`
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  width: 160px;
  height: 160px;
  bottom: 18%;
  object-fit: cover;
  left: 43%;
`;
const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Text = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: lighter;
  color: #000000c0;
`;
const ProfileImage = () => {
  return (
    <Wrapper>
      <Image src="/assets/post/1.jpeg" alt="" />
      <ProImage src="/assets/person/8.jpeg" />
      <Title>Greg Hmmmm</Title>
      <Text>Hello there</Text>
    </Wrapper>
  );
};

export default ProfileImage;
