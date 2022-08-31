import React, { useState } from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PostWrapper = styled.article`
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 40px;
  -webkit-box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.46);
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProImageLike = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-size: cover;
  cursor: pointer;
`;
const ProImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-size: cover;
  cursor: pointer;
  object-fit: cover;
`;
const ProName = styled.span`
  font-weight: 600;
  font-size: 15px;
`;
const ProTime = styled.span`
  font-size: 13px;
  align-self: center;
  margin-left: 5px;
  color: #000000b5;
  font-weight: 400;
`;
const ProWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 20px 0;
`;
const TImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
const PText = styled.span`
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
const PTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Post = ({ data }) => {
  const {
    id,
    ProfileName,
    time,
    ProfileImg,
    PostImg,
    PostText,
    Like,
    Comments,
  } = data;
  const [like, setLike] = useState(Like);
  const [isLiked, setIsLiked] = useState(false);
  const LikeHandler = () => {
    let plus = parseInt(like) + 1;
    let minus = parseInt(like) - 1;
    setLike(isLiked ? minus : plus);
    setIsLiked(!isLiked);
  };
  return (
    <PostWrapper key={id}>
      <TopWrapper>
        <ProWrapper>
          <ProImage src={ProfileImg} />
          <ProName>{ProfileName}</ProName>
          <ProTime>{time} ago</ProTime>
        </ProWrapper>
        <MoreVertIcon style={{ cursor: "pointer" }} />
      </TopWrapper>
      <Text>{PostText}</Text>
      {!PostImg ? null : <TImage src={PostImg} />}

      <TopWrapper>
        <PTop>
          <ProImageLike src="/assets/like.png" onClick={LikeHandler} />
          <ProImageLike src="/assets/heart.png" onClick={LikeHandler} />
          <PText>{like} People liked it</PText>
        </PTop>
        <PText>{Comments} Comments</PText>
      </TopWrapper>
    </PostWrapper>
  );
};
