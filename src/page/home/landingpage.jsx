import AnimeListComponent from "../../component/home/animelistcomponent";
import SliderComponent from "../../component/home/slidercomponent";
import { useState, useEffect } from 'react';
import TopAnimeComponent from "../../component/home/topanimecomponent";
import axios from 'axios';
import { useTheme } from "../../themeContext";
import { Spinner } from 'react-bootstrap';



const LandingPage = () => {
  const [topAnime, SetTopAnime] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        const topAnimeData = response.data.data || [];
        const top10Anime = topAnimeData.slice(0, 10);
        SetTopAnime(top10Anime);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { isDarkTheme } = useTheme()

  return (<>
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
    ) : (<>
      <SliderComponent />
      <AnimeListComponent />
      <hr style={{ borderColor: isDarkTheme ? "black" : "white", margin: 0, padding: 0 }} />
      <TopAnimeComponent topAnime={topAnime} />
    </>)}

  </>)
}
export default LandingPage;