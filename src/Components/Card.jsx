import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 23rem;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #817e7e;
`;
const Details = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #adabab;
  object-fit: cover;
`;

const Text = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 9px 0px;
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScf7Y_NVaXc3eeAxiNPSLOIW-MdCC-TRs0uw&usqp=CAU" />
        <Details>
          <ChannelImage src="https://img.mensxp.com/media/content/2021/Jan/Header_Ajey-Naggar-Instagram_6013a574d37aa.png?w=656&h=432&cc=1" />
          <Text>
            <Title>Title</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>
              1M Views{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  paddingInline: "0.3rem",
                }}
              >
                .
              </span>
              1 Year Ago
            </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
