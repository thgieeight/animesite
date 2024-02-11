import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '../../themeContext';
import { Col, Container, Row, Card, Spinner, Pagination,Breadcrumb } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const GenerePage = () => {
  const [genereAnime, setGenereAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.jikan.moe/v4/genres/anime');
        setGenereAnime(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { isDarkTheme } = useTheme();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = genereAnime.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(Math.ceil(genereAnime.length / itemsPerPage));


  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme ? 'white' : '#212529';
    document.body.style.color = isDarkTheme ? '#212529' : 'white';

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [isDarkTheme]);


  return (
    <Container className="my-3">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <span style={{fontSize:"32px"}}>Loading</span>
          <Spinner animation="grow" className='me-2'  style={{ borderColor: isDarkTheme ? "black" : "white", width: '4rem', height: '4rem'}} />
          <Spinner animation="grow"  className='me-2'  style={{ borderColor: isDarkTheme ? "black" : "white", width: '4rem', height: '4rem'}} />
          <Spinner animation="grow"  className='me-2'  style={{ borderColor: isDarkTheme ? "black" : "white", width: '4rem', height: '4rem'}} />

        </div>
      ) : <>
      <Row className="my-5">
      <Breadcrumb>
      <Breadcrumb.Item active style={{color: !isDarkTheme ? 'white' : 'black' }}>Genere</Breadcrumb.Item>
    </Breadcrumb>
        {currentItems.map((genre) => (
          <Col sm={12} md={3} lg={3} key={genre.mal_id} className='mt-3'>
            <NavLink to={`/genre/${genre.name}`} style={{textDecoration: "none"}}>
            <Card style={{ backgroundColor: isDarkTheme ? 'white' : 'black', color: !isDarkTheme ? 'white' : 'black' }}>
              <Card.Body className="text-center">
                <Card.Title>
                  <h2>{genre.name}</h2>
                </Card.Title>
                <p>Total Anime: {genre.count}</p>
              </Card.Body>
            </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
      <Row>
      <Pagination className='justify-content-center'>
        <Pagination.First onClick={goToFirstPage} />
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
        {Array.from({ length: Math.ceil(genereAnime.length / itemsPerPage) }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(genereAnime.length / itemsPerPage)} />
        <Pagination.Last onClick={goToLastPage} />
      </Pagination>
      </Row>
      </>}
      
    </Container>
  );
};

export default GenerePage;
