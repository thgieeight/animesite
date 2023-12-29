import banner4 from "../../assest/images/banner-4.jpg";
import banner1 from "../../assest/images/banner1.jpg";
import banner2 from "../../assest/images/banner2.jpg";
import banner3 from "../../assest/images/banner3.jpg";
import banner5 from "../../assest/images/banner5.jpg";
import banner6 from "../../assest/images/banner6.jpg";
import banner7 from "../../assest/images/banner7.jpg";
import banner10 from "../../assest/images/banner-10.jpg";
import banner11 from "../../assest/images/banner11.jpg";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTheme } from "../../themeContext";



const SliderComponent = () => {
    const {isDarkTheme} = useTheme()

    return (<>
        <Container fluid style={{ backgroundColor: isDarkTheme ? "white" : "black"}} >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className="img img-fluid" src={banner1} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner2} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner3} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner4} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner5} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner6} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner7} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner10} alt="pic" /></SwiperSlide>
                <SwiperSlide><img className="img img-fluid" src={banner11} alt="pic" /></SwiperSlide>
            </Swiper>


        </Container>
    </>)
}
export default SliderComponent;