import React, { useState } from "react";
import styled from "styled-components";
import { PostData } from "../Data/Postdata";
import { Post } from "./Post";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Posts = () => {
  const [Posts] = useState(PostData);

  return (
    <Container>
      {Posts.map((data) => {
        return <Post data={data} key={data.id} />;
      })}
    </Container>
  );
};

export default Posts;
