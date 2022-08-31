import React from "react";
import styled from "styled-components";
import OnlineFriends from "./OnlineFriends";

const Container = styled.section`
  flex: 2.5;
  padding: 10px 5px;
`;
const Birthday = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
const BirthdayImage = styled.img`
  width: 40px;
  height: 40px;
`;
const BirthdayText = styled.span`
  font-weight: 200;
  width: 85%;
`;
const AdImage = styled.img`
  width: 90%;
  border-radius: 10px;
  margin: 20px auto;
`;

const RightBar = () => {
  return (
    <Container>
      <Birthday>
        <BirthdayImage src="/assets/gift.png" />
        <BirthdayText>
          <b>Tobi</b> and <b>5 other friends</b> have a birthday today
        </BirthdayText>
      </Birthday>
      <AdImage src="/assets/ad.png" />
      <OnlineFriends />
    </Container>
  );
};

export default RightBar;
