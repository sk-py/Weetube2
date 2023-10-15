import styled, { ThemeProvider } from "styled-components";
import Menu from "./Components/menu";
import Navbar from "./Components/Navbar";
import Theme from "./Utils/Theme";
import { useState } from "react";

import { Outlet } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const lightTheme = Theme.lightTheme;
const darkTheme = Theme.darkTheme;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-family: "Roboto", Arial, sans-serif;
`;

const Wrapper = styled.div`
  padding: 0.7rem;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
