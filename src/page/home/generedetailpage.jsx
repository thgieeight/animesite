import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Breadcrumb, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useTheme } from '../../themeContext';
import { NavLink, useParams } from 'react-router-dom';

const GenereDetailPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [genreAnime, setGenreAnime] = useState([]);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.jikan.moe/v4/anime', {
          params: {
            type: 'tv',
            genre: `${slug}`,
          },
        });

        const genreAnimeList = response.data.data.filter((anime) =>
          anime.genres.some((genre) => genre.name === slug)
        );

        setGenreAnime(genreAnimeList);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, [slug]);

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
      <Container className='my-5'>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <span style={{ fontSize: "32px" }}>Loading</span>
            <Spinner animation="grow" className='me-2' style={{ borderColor: isDarkTheme ? "black" : "white", width: '4rem', height: '4rem' }} />
            <Spinner animation="grow" className='me-2' style={{ borderColor: isDarkTheme ? "black" : "white", width: '4rem', height: '4rem' }} />
            <Spinner animation="grow" className='me-2' style={{ borderColor: isDarkTheme ? "black" : "white", width: '4rem', height: '4rem' }} />
          </div>
        ) : (
          <>
            <Breadcrumb style={{ color: !isDarkTheme ? 'white' : 'black' }}>
              <Breadcrumb.Item href="/genere" style={{ color: !isDarkTheme ? 'white' : 'black' }}>
                Genere
              </Breadcrumb.Item>
              <Breadcrumb.Item active style={{ color: !isDarkTheme ? 'white' : 'black' }}>
                {slug}
              </Breadcrumb.Item>
            </Breadcrumb>
            {genreAnime.length > 0 ? (
              <Row>
                {genreAnime.map((anime) => (
                  <Col sm={12} md={3} lg={3} key={anime.mal_id} className='mt-3'>
                    <Card style={{ backgroundColor: isDarkTheme ? 'white' : 'black', color: !isDarkTheme ? 'white' : 'black' }}>
                      <Card.Body className="text-center">
                        <Card.Img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
                        <Card.Title>
                          <h2>{anime.titles[0].title}</h2>
                          <p>Type: {anime.type}</p>
                          <p>Status: {anime.status}</p>
                          <p>Episodes: {anime.episodes}</p>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                <Col>
                  <p>No anime found in this genre</p>
                </Col>
              </Row>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default GenereDetailPage;
