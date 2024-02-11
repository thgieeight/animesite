import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '../../themeContext';
import { Col, Container, Row, Card, Spinner, Pagination } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const RandomPage = () => {
    const [randomAnime, setRandomAnime] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
          try {
              setLoading(true);
              let response;
  
              do {
                  response = await axios.get('https://api.jikan.moe/v4/random/anime');
              } while (response.data.data.type !== "TV");
  
              setRandomAnime(response.data.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          } finally {
              setLoading(false);
          }
      };
  
      fetchData();
  }, []);

    const { isDarkTheme } = useTheme();

    useEffect(() => {
        document.body.style.backgroundColor = isDarkTheme ? 'white' : '#212529';
        document.body.style.color = isDarkTheme ? '#212529' : 'white';

        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [isDarkTheme]);



    return (
        <>
            <Container className="my-3">
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                        <span style={{ fontSize: '32px' }}>Loading</span>
                        <Spinner
                            animation="grow"
                            className="me-2"
                            style={{ borderColor: isDarkTheme ? 'black' : 'white', width: '4rem', height: '4rem' }}
                        />
                        <Spinner
                            animation="grow"
                            className="me-2"
                            style={{ borderColor: isDarkTheme ? 'black' : 'white', width: '4rem', height: '4rem' }}
                        />
                        <Spinner
                            animation="grow"
                            className="me-2"
                            style={{ borderColor: isDarkTheme ? 'black' : 'white', width: '4rem', height: '4rem' }}
                        />
                    </div>
                ) : (
                    <>
<Row className="my-5">
  <Col sm={12} md={6} lg={6} className="mt-3">
    <Card style={{ backgroundColor: isDarkTheme ? 'white' : 'black', color: !isDarkTheme ? 'white' : 'black' }}>
      <Card.Img variant="top" style={{minHeight: "200px"}} src={randomAnime.images.jpg.large_image_url} alt='no image sorry' />
    </Card>
  </Col>
  <Col sm={12} md={6} lg={6} className="mt-3">
    <Card style={{ backgroundColor: isDarkTheme ? 'white' : 'black', color: !isDarkTheme ? 'white' : 'black' }}>
      <Card.Body>
        <Card.Title>{randomAnime.title}</Card.Title>
        <Card.Text>{randomAnime.synopsis}</Card.Text>
        <Card.Text>
          <strong>Type:</strong> {randomAnime.type}
        </Card.Text>
        <Card.Text>
          <strong>Episodes:</strong> {randomAnime.episodes}
        </Card.Text>
        <Card.Text>
          <strong>Airing:</strong> {randomAnime.airing ? 'Yes' : 'No'}
        </Card.Text>
        <Card.Text>
          <strong>Aired:</strong> from {randomAnime.aired.from} to {randomAnime.aired.to}
        </Card.Text>
        <Card.Text>
          <strong>Duration:</strong> {randomAnime.duration}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {randomAnime.rating}
        </Card.Text>
        <Card.Text>
          <strong>Score:</strong> {randomAnime.score}
        </Card.Text>
        <Card.Text>
          <strong>Genres:</strong> {randomAnime.genres.map(genre => genre.name).join(', ')}
        </Card.Text>
        <Card.Text>
          <strong>Trailer:</strong>
          {randomAnime.trailer ? (
            <iframe
              title={`${randomAnime.title} Trailer`}
              width="100%"
              height="315"
              src={randomAnime.trailer.embed_url} 
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            'Trailer not available'
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
                    </>) 
                }
            </Container>
        </>)
}
export default RandomPage;
