import Pages from "./pages/Pages";
import Cartegory from "./components/Cartegory";
import { BrowserRouter, Link } from "react-router-dom"
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>Delicious</Logo>
          <> </>
          <GiKnifeFork color={"#FDA38F"} />
        </Nav>
        <Search />
        <Cartegory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weigth: 400;
    font-family: "Lobster Two", cursive;
    color: #FDA38F;
`;

const Nav = styled.div`
  paddingn: 4rem 0rem;
  displat: flex;
  justify-content: flex-start;
  align-items: center;
  
  svg {
    font-size: 2rem
  }
`;

export default App;
