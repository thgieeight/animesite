import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchAnime, searchCharacters, searchManga, searchMovies } from '../../service/searchService';

const ActualSearchDisplay = () => {
  const { slug1, slug2 } = useParams();
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let result;

      switch (slug1) {
        case 'anime':
          result = await searchAnime(slug2);
          break;
        case 'characters':
          result = await searchCharacters(slug2);
          break;
        case 'movies':
          result = await searchMovies(slug2);
          break;
        default:
          result = await searchManga(slug2);
          break;
      }

      setSearchResult(result);
    };

    fetchData();
  }, [slug1, slug2]);

  console.log('searchResult:', searchResult);

  return (
    <>
    <h1>Result: {slug1} / {slug2}</h1>
    {searchResult && (
      <div>
        {slug1 === 'characters' ? (
          searchResult.map((character) => (
            <div key={character.mal_id}>
              <h2>{character.name}</h2>
              <img src={character.images.jpg.image_url} alt={character.name} />
              <p>{character.about}</p>
            </div>
          ))
        ) : (
          searchResult.map((anime) => (
            <div key={anime.mal_id}>
              <h2>{anime.title}</h2>
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <p>{anime.synopsis}</p>
            </div>
          ))
        )}
      </div>
    )}
  </>
  );
};

export default ActualSearchDisplay;
