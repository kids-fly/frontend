import React from "react";
import styled from "styled-components";
import img from "../img/girl.jpg";

const Title = styled.h3`
  text-align: center;
  color: #333;
  font-weight: 300;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
`;

const About = () => {
  return (
    <div>
      <Title>
        <h3>What is KidsFly ?</h3>
      </Title>
      <Flex>
        <>
          <img src={img} style={{ width: "25%", marginTop: "50px" }} />
          <p style={{ width: "25%", lineSpacing: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ipsum, architecto eligendi molestias reiciendis soluta accusamus
            sunt nihil sint facilis quaerat adipisci exercitationem animi at!
            Enim, tempore ullam? Officiis labore, at eius minus doloremque
            dolore rerum quia, itaque totam, quos vel temporibus magni maxime
            non. Perferendis voluptatibus in numquam eos.
          </p>
        </>
      </Flex>
    </div>
  );
};

export default About;
