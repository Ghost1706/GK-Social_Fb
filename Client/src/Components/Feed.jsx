import React from "react";
import styled from "styled-components";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import PlaceIcon from "@mui/icons-material/Place";
import Posts from "../Components/Posts";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Container = styled.div`
  flex: 4;
  padding: 25px;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-size: cover;
  cursor: pointer;
`;
const Post = styled.div`
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 40px;
  -webkit-box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.46);
`;
const HR = styled.div`
  width: 95%;
  margin-top: 20px;
  margin-left: 2.5%;
  margin-bottom: 20px;
  height: 1px;
  background-color: #bebebe8c;
`;
const Pbot = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 95%;
  margin-left: 2.5%;
`;
const Btn = styled.button`
  color: #ffffff;
  padding: 8px 10px;
  background-color: #187515;
  border: none;
  border-radius: 5px;
`;
const PImage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const PItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-right: 6px;
`;
const PText = styled.span`
  font-weight: 500;
  font-size: 14px;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: 15px;
`;
const PTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Feed = () => {
  return (
    <Container>
      <Post>
        <PTop>
          <Image src="/assets/person/8.jpeg" alt="" />
          <Input type="text" placeholder="Whats on your mind Greg??" />
        </PTop>
        <HR />
        <Pbot>
          <PImage>
            <PItem>
              <PermMediaIcon style={{ color: "red" }} />
              <PText className="p-text">Photo or Video</PText>
            </PItem>
            <PItem>
              <LabelIcon style={{ color: "blue" }} />
              <PText className="p-text">Tag</PText>
            </PItem>
            <PItem>
              <PlaceIcon style={{ color: "green" }} />
              <PText className="p-text">Location</PText>
            </PItem>
            <PItem>
              <EmojiEmotionsIcon style={{ color: "yellow" }} />
              <PText className="p-text">Feeling</PText>
            </PItem>
            <PItem />
          </PImage>
          <Btn>Share</Btn>
        </Pbot>
      </Post>
      <Posts />
    </Container>
  );
};

export default Feed;
