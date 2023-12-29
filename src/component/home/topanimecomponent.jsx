import { Col, Container, Row } from "react-bootstrap";
import { useTheme } from "../../themeContext";


const TopAnimeComponent = ({ topAnime }) => {
    const { isDarkTheme } = useTheme()
    return (<>
        <Container fluid style={{ backgroundColor: isDarkTheme ? "white" : "black", color: !isDarkTheme ? "white" : "black" }}>
            <Row>
                <Col md={12} className="text-center my-3" bg="secondary">
                    <h2>Top 10 Anime</h2>
                </Col>
            </Row>
            {topAnime.map((anime, index) => (
                <Row key={anime.mal_id} className="py-3">
                    <Col md={2}>
                        <ul>
                            <li style={{ listStyleType: "none" }}><h5>{index + 1}</h5></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <img className="animelist" src={anime.images.jpg.large_image_url} alt={anime.title} />
                    </Col>
                    <Col md={7} key={anime.mal_id}>
                        <Row>
                            <Col>
                                <b>Title:</b> {anime.title}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <b>Genre:</b>
                                {anime.genres.map((genre) => (
                                    <span key={genre.mal_id}>
                                        {genre.name},
                                    </span>
                                ))}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <b>Status:</b> {anime.status}
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "justify" }}>
                                <b>Synopsis:</b> {anime.synopsis}
                                <a href={anime.url} target="_blank">see more</a>
                            </Col>
                        </Row>
                        <Row>
                            {anime.trailer && anime.trailer.url ? (
                                <Row>
                                    <Col>
                                        <b>Trailer:</b>
                                        <a href={anime.trailer.url} target="_blank" rel="noopener noreferrer">
                                            Watch Trailer
                                        </a>
                                    </Col>
                                </Row>
                            ) : (
                                <Row>
                                    <Col>
                                        <b>Sorry, No trailer available.</b>
                                    </Col>
                                </Row>
                            )}
                        </Row>
                    </Col>
                </Row>
            ))}
        </Container>
    </>)
}
export default TopAnimeComponent;