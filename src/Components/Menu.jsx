import React from "react";
import styled from "styled-components";
import Weetube from "../img/Weetube.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import SportsBasketballRoundedIcon from "@mui/icons-material/SportsBasketballRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import withTheme from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 15px;
  position: sticky;
  top: 0;
  box-shadow: 1px 0px 15px 0px ${({ theme }) => theme.shadow};
`;

const Wrapper = styled.div`
  padding: 0.7rem 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 7.5px 0px 7.5px 5px;
  cursor: pointer;
  font-family: "Roboto", Arial, sans-serif;
  &:hover {
    background-color: ${({ theme }) => theme.shadow};
    border-radius: 0.6rem;
  }
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 7.7px 0px;
  font-family: "Roboto", Arial, sans-serif;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border-radius: 1rem;
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

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.1px solid ${({ theme }) => theme.soft};
`;

const Text = styled.h3`
  color: ${({ theme }) => theme.textSoft};
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  margin: 10px 0px;
`;

const CustomNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &.active {
    background-color: ${({ theme }) => theme.shadow};
  }
  &.dorm {
    background-color: white;
  }
`;

const Menu = ({ darkMode, setDarkMode, theme }) => {
  const location = useLocation();

  const isLinkActive = (to) => {
    return location.pathname === to;
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <Img src={Weetube} />
            <h3>Weetube</h3>
          </Logo>
        </Link>
        <CustomNavLink
          to="/"
          style={isLinkActive("/home") ? { opacity: "0.6" } : { opacity: "1" }}
        >
          <Item>
            <HomeRoundedIcon />
            Home
          </Item>
        </CustomNavLink>
        <CustomNavLink
          to={"/video"}
          style={isLinkActive("/video") ? { opacity: "0.6" } : { opacity: "1" }}
        >
          <Item>
            <ExploreRoundedIcon />
            Explore
          </Item>
        </CustomNavLink>

        <Item>
          <SubscriptionsRoundedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryRoundedIcon />
          Library
        </Item>
        <Item>
          <HistoryRoundedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleRoundedIcon /> SIGN IN
          </Button>
        </Login>
        <Text>More on Weetube</Text>
        <Item>
          <LibraryMusicRoundedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballRoundedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsRoundedIcon />
          Games
        </Item>
        <Item>
          <MovieCreationRoundedIcon />
          Movies
        </Item>
        <Item>
          <ArticleRoundedIcon />
          News
        </Item>
        <Item>
          <LiveTvRoundedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsRoundedIcon />
          Settings
        </Item>
        <Item>
          <HelpOutlineRoundedIcon />
          Help
        </Item>
        <Item>
          <FlagRoundedIcon />
          Report
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
