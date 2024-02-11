import banner4 from "../../assest/images/banner-4.jpg";
import banner1 from "../../assest/images/banner1.jpg";
import banner2 from "../../assest/images/banner2.jpg";
import banner3 from "../../assest/images/banner3.jpg";
import banner5 from "../../assest/images/banner5.jpg";
import banner6 from "../../assest/images/banner6.jpg";
import banner7 from "../../assest/images/banner7.jpg";
import banner10 from "../../assest/images/banner-10.jpg";
import banner11 from "../../assest/images/banner11.jpg";
import { Container,Button,Carousel } from "react-bootstrap";
import { useTheme } from "../../themeContext";



const SliderComponent = () => {
    const {isDarkTheme} = useTheme()

    return (<>
        <Container fluid style={{ backgroundColor: isDarkTheme ? "white" : "black"}} >
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption className="text-white">
          <h2>One Piece</h2>
        <p>Shonen manga, Action manga, Comedy, Fantasy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="text-white">
          <h2>Demo2 Slayer</h2>
      <p>Adventure, Dark fantasy, Martial arts</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption className="text-white">
          <h2>Gintama</h2>
          <p>
          Shonen manga, Science fiction comics, Comedy
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Third slide"
        />
        <Carousel.Caption className="text-white">
          <h2>Attack On Titan</h2>
          <p>
          Shonen manga, Dark fantasy, Horror comics          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner5}
          alt="Third slide"
        />
        <Carousel.Caption className="text-white">
          <h2>My Hero Ademedic</h2>
          <p>
          Shonen manga, Science fantasy, Comedy          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner6}
          alt="Third slide"
        />
        <Carousel.Caption className="text-white">
          <h2>Jujutsu Kaisen</h2>
          <p>
          Adventure, Dark fantasy, Supernatural          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner7}
          alt="Third slide"
        />
        <Carousel.Caption className="text-white">
          <h2>Chain Saw Man</h2>
          <p>
          Shonen manga, Dark fantasy          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner10}
          alt="Third slide"
        />
        <Carousel.Caption className="text-white">
          <h2>Haikyuu!!</h2>
          <p>
          Drama, Comedy, Biographical, Sports          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner11}
          alt="Third slide"
        />
        <Carousel.Caption className="text-white">
          <h2>Naruto</h2>
          <p>
          Action manga, Fantasy          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        </Container>
    </>)
}
export default SliderComponent;