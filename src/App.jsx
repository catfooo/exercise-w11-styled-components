import styled from "styled-components";
import logo from "./logo.png"

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Logo = styled.img`
  width: 50px;
`;

const Container = styled.div`
  background-color: #eff7f6;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eff7f6;
  padding: 1em;
  // text-align: center;
  font-size: 1.5em;
`;

const HeaderLinks = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
text-align: center;
width: 100%;
li {
  display: inline;
  margin: 0 15px;
}
a {
  color: #000000;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease-in-out; 
  &:hover {
    text-decoration: underline;
  }
}
`;


export const App = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo"/>
        <HeaderLinks>
          <li><a className="anchor-links" href="#articles">Articles</a></li>  
          <li>
            <a
              className="anchor-links"
              href="https://ra.co/events/se/stockholm"
              target="_blank"
              rel="noopener noreferrer"
            >Events</a>
          </li>
        </HeaderLinks>
        <div></div> {/* Empty div to keep space between */}
      </Header>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </Container>
  );
};
