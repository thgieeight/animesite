import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Card } from 'react-bootstrap';
import axios from 'axios';
import { useTheme } from '../../themeContext';
import { useParams } from 'react-router-dom';

const MangaPage = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const { isDarkTheme } = useTheme();
    const [mangaData, setMangaData] = useState([]);

    useEffect(() => {
        const fetchMangaData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.jikan.moe/v4/manga?sfw=true`);
                const mangaResults = response.data.data;
                setMangaData(mangaResults);
            } catch (error) {
                console.error('Error fetching manga data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMangaData();
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
                    {mangaData.length > 0 ? (
                        <Row xs={1} md={2} lg={4}>
                            {mangaData.map((manga) => (
                                <Col key={manga.mal_id} className='my-3'>
                                    <Card
                                        style={{
                                            backgroundColor: isDarkTheme ? 'white' : 'black',
                                            color: !isDarkTheme ? 'white' : 'black',
                                        }}
                                    >
                                        <Card.Img
                                            src={manga.images?.jpg?.image_url}
                                            alt={manga.title}
                                            style={{ maxHeight: '300px', objectFit: 'cover' }}
                                        />
                                        <Card.Body className='text-center'>
                                            <Card.Title>{manga.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Row>
                            <Col>
                                <p>No mangas found</p>
                            </Col>
                        </Row>
                    )}
                </>
            )}
        </Container>
    );
};

export default MangaPage;
