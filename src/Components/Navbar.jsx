import React from "react";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { SearchOutlined } from "@mui/icons-material";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: ${({ theme }) => theme.bgLighter};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.border};
  /* padding: 10px 15px; */
  border-radius: 2rem;
  overflow-x: hidden;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Manrope", sans-serif;
  text-indent: 15px;
  color: ${({ theme }) => theme.text};
  caret-color: ${({ theme }) => theme.text};
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border-radius: 0.5rem;
  color: #3f8afa;
  border: 1px solid #3f8afa;
  font-size: 1rem;
  margin-top: 10px;

  display: flex;
  align-items: center;
  font-weight: 550;
  gap: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined
            style={{
              backgroundColor: "#757474",
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "white",
            }}
          />
        </Search>
        <Button>
          <AccountCircleRoundedIcon /> SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
