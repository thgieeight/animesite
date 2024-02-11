import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../page/home/landingpage";
import HomeLayout from "../page/layout/homelayout"
import GenerePage from "../page/home/generepage"
import MoviePage from "../page/home/moviepage"
import RandomPage from "../page/home/randompage"
import MangaPage from "../page/home/mangapage"
import CharactersPage from "../page/home/characterspage"
import GenereDetailPage from "../page/home/generedetailpage"
import SearchResultPage from "../page/home/searchresultpage"

const Routing=()=>{

    return(<>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeLayout></HomeLayout>}> 
            <Route index element={<LandingPage />}></Route>
            <Route path="/genere" element={<GenerePage/> }></Route>            
            <Route path="/movies" element={<MoviePage/> }></Route>            
            <Route path="/random" element={<RandomPage/> }></Route>            
            <Route path="/manga" element={<MangaPage/> }></Route>            
            <Route path="/characters" element={<CharactersPage/> }></Route>            
            <Route path="/genre/:slug" element={<GenereDetailPage /> }></Route>            
            <Route path="/search/:slug1/:slug2" element={<SearchResultPage /> }></Route>            
        </Route>
        </Routes>
        </BrowserRouter>

    </>)
}

export default Routing;