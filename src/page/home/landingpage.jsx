import FooterComponent from "../../component/footer/footercomponent";
import HeaderCoponent from "../../component/header/headercomponent";
import AnimeListComponent from "../../component/home/animelistcomponent";
import SliderComponent from "../../component/home/slidercomponent";
import { useState, useEffect } from 'react';
import TopAnimeComponent from "../../component/home/topanimecomponent";
import axios from 'axios';
import { useTheme } from "../../themeContext";


const LandingPage =()=>{
    const [topAnime, SetTopAnime] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');
                const topAnimeData = response.data.data || [];
                const top10Anime = topAnimeData.slice(0, 10);
                SetTopAnime(top10Anime);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };

        fetchData();
    }, []);
    
    const {isDarkTheme} = useTheme()

    return(<>
    <HeaderCoponent />
    <SliderComponent />
    <AnimeListComponent />
    <hr style={{ borderColor: isDarkTheme ? "black" : "white", margin: 0, padding: 0 }} />
    <TopAnimeComponent topAnime={topAnime} />
    <FooterComponent />
    </>)
}
export default LandingPage;