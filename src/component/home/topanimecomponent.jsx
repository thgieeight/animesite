import { Col, Container, Row } from "react-bootstrap";
import { useTheme } from "../../themeContext";

const TopAnimeComponent = ({ topAnime }) => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: isDarkTheme ? "white" : "black",
          color: !isDarkTheme ? "white" : "black",
        }}
      >
        <Row>
          <Col md={12} className="text-center my-3" bg="secondary">
            <h2>Top 10 Anime</h2>
          </Col>
        </Row>
        {topAnime.map((anime, index) => (
          <Row key={anime.mal_id} className="py-3 align-items-center">
            <Col md={1}>
              <h5>{index + 1}</h5>
            </Col>
            <Col md={3}>
              <img
                className="img-fluid animelist"
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
              />
            </Col>
            <Col md={8}>
              <b>Title:</b> {anime.title}
              <br />
              <b>Genre:</b>
              {anime.genres.map((genre) => (
                <span key={genre.mal_id}>{genre.name}, </span>
              ))}
              <br />
              <b>Status:</b> {anime.status}
              <br />
              <b>Synopsis:</b> {anime.synopsis}
              <a href={anime.url} target="_blank" rel="noopener noreferrer">
                see more
              </a>
              <br />
              {anime.trailer && anime.trailer.url ? (
                <div>
                  <b>Trailer:</b>
                  <a
                    href={anime.trailer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Trailer
                  </a>
                </div>
              ) : (
                <div>
                  <b>Sorry, No trailer available.</b>
                </div>
              )}
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default TopAnimeComponent;
