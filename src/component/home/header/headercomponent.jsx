import { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Select } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import ThemeSwitch from '../../common/switcher/theme-switchercomponent';
import { useTheme } from '../../../themeContext';
import { searchAnime, searchMovies, searchCharacters, searchManga } from '../../../service/searchService';
import '../../../main.css'; 

const HeaderCoponent = () => {
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();

  const [searchContext, setSearchContext] = useState('anime');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      let searchData;
  
      switch (searchContext) {
        case 'anime':
          searchData = await searchAnime(searchQuery);
          break;
        case 'movies':
          searchData = await searchMovies(searchQuery);
          break;
          case 'characters':
            searchData = await searchCharacters(searchQuery);
            break;
            case 'manga':
              searchData = await searchManga(searchQuery);
              break;
  
        default:
          break;
      }
  
      console.log('Search context:', searchContext);
      console.log('Search query:', searchQuery);
        
      navigate(`/search/${searchContext}/${searchQuery}`);

    } catch (error) {
      console.error('Error during search:', error);
    }  };
    return(<>
    <Navbar variant={isDarkTheme ? 'light' : 'dark'} expand="lg" bg={isDarkTheme ? 'light' : 'dark'}>
      <Container fluid >
        <Navbar.Brand href="#" className="me-4"><strong>PixAnime</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" style={{textDecoration: "none", color: !isDarkTheme ? "white" : "black"}}  className="me-2 nav-link">HOME</NavLink>
            <NavLink to="/genere" style={{textDecoration: "none", color: !isDarkTheme ? "white" : "black"}}  className="me-2 nav-link">GENRES</NavLink>
            <NavLink to="/movies" style={{textDecoration: "none", color: !isDarkTheme ? "white" : "black"}}  className="me-2 nav-link">MOVIES</NavLink>
            <NavLink to="/characters" style={{textDecoration: "none", color: !isDarkTheme ? "white" : "black"}}  className="me-2 nav-link">CHARACTERS</NavLink>
            <NavLink to="/manga" style={{textDecoration: "none", color: !isDarkTheme ? "white" : "black"}}  className="me-2 nav-link">MANGA</NavLink>
            <NavLink to="/random" style={{textDecoration: "none", color: !isDarkTheme ? "white" : "black"}}  className="me-2 nav-link">RANDOM</NavLink>
            <Form className="d-flex" style={{ marginLeft: 90 }} onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <div className="input-group">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: '350px' }}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <Form.Select
              aria-label="Search context"
              className="me-2"
              style={{ width: '100px' }}
              onChange={(e) => setSearchContext(e.target.value)}
              value={searchContext}
            >
              <option value="anime">Anime</option>
              <option value="movies">Movies</option>
              <option value="characters">Characters</option>
              <option value="manga">Manga</option>
            </Form.Select>
            <Button type="submit" variant={isDarkTheme ? 'outline-dark' : 'outline-light'}>Search</Button>
          </div>
        </Form>
          </Nav>
          <span className="me-2"><ThemeSwitch /></span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr style={{ borderColor: isDarkTheme ? "black" : "white", margin: 0, padding: 0 }} />
    </>)
}
export default HeaderCoponent;