import { Container, Row, Col, Card, ListGroup, NavLink } from "react-bootstrap";
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

const AnimeListComponent = () => {
    const {isDarkTheme} = useTheme()
    return (<>
        <Container fluid style={{ backgroundColor: isDarkTheme ? "white" : "black"}}>
            <Row>
                <Col sm={6} md={4} lg={4} className="mt-3">
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner1} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">One Piece</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4} className="mt-3">
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner2} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">Demon Slayer</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4} className="mt-3">
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner3} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">Gintama</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm={6} md={4} lg={4}>
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner4} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">Attack On Titan</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner5} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">My Hero Ademedic</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                    <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner6} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">Jujutsu Kaisen</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row className="pb-3">
                <Col sm={6} md={4} lg={4}>
                <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner7} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">Chain Saw Man</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner10} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">Haikyuu!!</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={4}>
                <Card border={isDarkTheme ? 'dark' : 'light'}>
                        <Card.Img variant="top" src={banner11} />
                        <Card.Body>
                            <Card.Text>
                                <p className="text-center">Naruto</p>
                                <NavLink to='/anime:slug' className="text-center"><span className="btn btn-sm btn-light">Watch Here</span></NavLink>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Genres:</ListGroup.Item>
                            <ListGroup.Item>Status:</ListGroup.Item>
                            <ListGroup.Item>Seasons:</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}
export default AnimeListComponent;