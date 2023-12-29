import { Navbar, Nav,Container,Form,Button, NavLink } from "react-bootstrap";
import ThemeSwitch from "../common/switcher/theme-switchercomponent";
import { useTheme } from "../../themeContext";
const HeaderCoponent=()=>{
  const {isDarkTheme} = useTheme()
  console.log(isDarkTheme)
    return(<>
    <Navbar variant={isDarkTheme ? 'light' : 'dark'} expand="lg" bg={isDarkTheme ? 'light' : 'dark'}>
      <Container fluid >
        <Navbar.Brand href="#"><strong>PixAnime</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/genres">GENRES</NavLink>
            <NavLink to="/movies">MOVIES</NavLink>
            <NavLink to="/tvseries">TV SERIES</NavLink>
            <NavLink to="/ongoing">ONGOING</NavLink>
            <NavLink to="/upcomming">UPCOMING</NavLink>
            <NavLink to="/characters">CHARACTERS</NavLink>
            <NavLink to="/managa">MANGA</NavLink>
            <NavLink to="/random">RANDOM</NavLink>
            <Form className="d-flex" style={{ marginLeft: 90 }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: '250px' }}
            />
            <Button variant= {isDarkTheme ? 'outline-dark' : 'outline-light'}>Search</Button>
          </Form>
          </Nav>
          <span className="me-2"><ThemeSwitch /></span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}
export default HeaderCoponent;