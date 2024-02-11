import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Pagination, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useTheme } from '../../themeContext';
import { NavLink, useParams } from 'react-router-dom';

const MoviePage = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const { isDarkTheme } = useTheme();
    const [movieData, setMovieData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    
    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://api.jikan.moe/v4/anime', {
                    params: {
                        type: 'movie',
                    },
                });
                const movieResults = response.data.data.filter((anime) => anime.type === 'Movie');
                setMovieData(movieResults);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [slug]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = movieData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const goToFirstPage = () => setCurrentPage(1);
    const goToLastPage = () => setCurrentPage(Math.ceil(movieData.length / itemsPerPage));


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
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '200px' }}>
                        <span style={{ fontSize: '32px' }}>Loading</span>
                        <Spinner
                            animation='grow'
                            className='me-2'
                            style={{ borderColor: isDarkTheme ? 'black' : 'white', width: '4rem', height: '4rem' }}
                        />
                        <Spinner
                            animation='grow'
                            className='me-2'
                            style={{ borderColor: isDarkTheme ? 'black' : 'white', width: '4rem', height: '4rem' }}
                        />
                        <Spinner
                            animation='grow'
                            className='me-2'
                            style={{ borderColor: isDarkTheme ? 'black' : 'white', width: '4rem', height: '4rem' }}
                        />
                    </div>
                ) : (
                    <>
                        {movieData.length > 0 ? (
                            <Row>
                                {currentItems.map((anime) => (
                                    <Card
                                        key={anime.id}
                                        className='my-3'
                                        style={{
                                            backgroundColor: isDarkTheme ? 'white' : 'black',
                                            color: !isDarkTheme ? 'white' : 'black',
                                        }}
                                    >
                                        <Row>
                                            <Col sm={12} md={6} lg={6} className='mt-3'>
                                                <Card.Body className='text-center'>
                                                    <Card.Img
                                                        src={anime.images?.jpg?.large_image_url}
                                                        alt={anime.title}
                                                        style={{ maxHeight: '300px', maxWidth: '150px', objectFit: 'cover' }}
                                                    />
                                                </Card.Body>
                                                <Card.Title className='text-center'>
                                                    <h2>{anime.titles[0].title}</h2>
                                                    <p>Rank: {anime.rank}</p>
                                                </Card.Title>
                                            </Col>

                                            <Col sm={12} md={6} lg={6} className='mt-3'>
                                                <Card.Body className='text-center'>
                                                    {anime.trailer && (
                                                        <div>
                                                            <p>Trailer:</p>
                                                            <iframe
                                                                width='100%'
                                                                height='250'
                                                                src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                                                                title='Trailer'
                                                                frameBorder='0'
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    )}
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}

                            </Row>
                        ) : (
                            <Row>
                                <Col>
                                    <p>No movies found</p>
                                </Col>
                            </Row>
                        )}
                        <Row>
                            <Pagination className='justify-content-center'>
                                <Pagination.First onClick={goToFirstPage} />
                                <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                                {Array.from({ length: Math.ceil(movieData.length / itemsPerPage) }).map((_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(movieData.length / itemsPerPage)}
                                />
                                <Pagination.Last onClick={goToLastPage} />
                            </Pagination>
                        </Row>
                    </>
                )}
            </Container>
        </>
    );
};

export default MoviePage;
