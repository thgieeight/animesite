import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import banner1 from '../../assest/images/banner1.jpg'
import banner2 from '../../assest/images/banner2.jpg'
import banner3 from '../../assest/images/banner3.jpg'
import banner4 from '../../assest/images/banner-4.jpg'
import banner5 from '../../assest/images/banner5.jpg'
import banner6 from '../../assest/images/banner6.jpg'
import banner7 from '../../assest/images/banner7.jpg'
import banner10 from '../../assest/images/banner-10.jpg'
import banner11 from '../../assest/images/banner11.jpg'
import { useTheme } from "../../themeContext";
import { NavLink } from "react-router-dom";

const AnimeListComponent = () => {
    const {isDarkTheme} = useTheme()
    return (<>
        <Container fluid style={{ backgroundColor: isDarkTheme ? "white" : "black"}}>
            <Row>
                <Col sm={6} md={4} lg={4} className="mt-3">
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner1} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">One Piece</p>
                                <NavLink to='https://www.youtube.com/watch?v=S8_YwFLCh4U' target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Shonen manga, Action manga, Comedy, Fantasy</ListGroup.Item>
                            <ListGroup.Item>Status: OnGoing</ListGroup.Item>
                            <ListGroup.Item>Seasons: 20</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4} className="mt-3">
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner2} />
                        <Card.Body>
                            <Card.Text  className="text-center">
                                <p className="text-center">Demon Slayer</p>
                                <NavLink to='https://www.youtube.com/watch?v=VQGCKyvzIM4' target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Adventure, Dark fantasy, Martial arts</ListGroup.Item>
                            <ListGroup.Item>Status: Complete</ListGroup.Item>
                            <ListGroup.Item>Seasons: 4</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4} className="mt-3">
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner3} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">Gintama</p>
                                <NavLink to='https://www.youtube.com/watch?v=bZYysREKnm4' target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Shonen manga, Science fiction comics, Comedy</ListGroup.Item>
                            <ListGroup.Item>Status: Complete</ListGroup.Item>
                            <ListGroup.Item>Seasons: 9</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm={6} md={4} lg={4}>
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner4} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">Attack On Titan</p>
                                <NavLink to='https://www.youtube.com/watch?v=E7WytLM2KvY' target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Shonen manga, Dark fantasy, Horror comics</ListGroup.Item>
                            <ListGroup.Item>Status: Complete</ListGroup.Item>
                            <ListGroup.Item>Seasons: 4</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner5} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">My Hero Ademedic</p>
                                <NavLink to='https://www.youtube.com/watch?v=msRZ0SB2xM8' target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Shonen manga, Science fantasy, Comedy</ListGroup.Item>
                            <ListGroup.Item>Status: OnGoing</ListGroup.Item>
                            <ListGroup.Item>Seasons: 6</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner6} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">Jujutsu Kaisen</p>
                                <NavLink to='https://www.youtube.com/watch?v=Pm-wNmS9RGI' target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Adventure, Dark fantasy, Supernatural</ListGroup.Item>
                            <ListGroup.Item>Status: OnGoing</ListGroup.Item>
                            <ListGroup.Item>Seasons: 2</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row className="pb-3">
                <Col sm={6} md={4} lg={4}>
                <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner7} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">Chain Saw Man</p>
                                <NavLink to='https://www.youtube.com/watch?v=FaHY74-6UYs'  target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Shonen manga, Dark fantasy</ListGroup.Item>
                            <ListGroup.Item>Status: OnGoing</ListGroup.Item>
                            <ListGroup.Item>Seasons: 1</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner10} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">Haikyuu!!</p>
                                <NavLink to='https://www.youtube.com/watch?v=JOGp2c7-cKc'  target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Drama, Comedy, Biographical, Sports</ListGroup.Item>
                            <ListGroup.Item>Status: Complete</ListGroup.Item>
                            <ListGroup.Item>Seasons: 4</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner11} />
                        <Card.Body>
                            <Card.Text className="text-center">
                                <p className="text-center">Naruto</p>
                                <NavLink to='https://www.youtube.com/watch?v=QczGoCmX-pI' target='_blank'><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres: Action manga, Fantasy</ListGroup.Item>
                            <ListGroup.Item>Status: Complete</ListGroup.Item>
                            <ListGroup.Item>Seasons: 4</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}
export default AnimeListComponent;