import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../../services';
import {
  MainWrapper,
  Title,
  ContentWrapper,
  Button,
  ButtonWrapper
} from './Pokemon.styles';
import Loader from './Loader';
import Ring from './Ring';
import Card from './Card';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nav, setNav] = useState({ next: '', prev: '' });
  const [loading, setLoading] = useState(true);
  const [contenders, setContenders] = useState([]);

  const fetchData = async url => {
    const { results, next, prev } = await fetchPokemon(url);
    setPokemon(results);
    setNav({
      next,
      prev
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21');
  }, []);

  const navigateCards = direction => {
    setLoading(true);
    fetchData(nav[direction]);
  };

  const updateContenders = guy => {
    console.log('selected', guy);
    setContenders([...contenders, guy]);
  };

  return (
    <MainWrapper>
      <Title>Pokemon Death Match</Title>
      <Ring contenders={contenders} />
      <ContentWrapper>
        {pokemon.map(guy => (
          <Card guy={guy} update={updateContenders} key={guy.name} />
        ))}
        {loading && <Loader data-test="loader" />}
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          data-test="prev-button"
          onClick={() => navigateCards('prev')}
          disabled={!nav.prev}
        >
          Prev
        </Button>
        <Button
          data-test="next-button"
          onClick={() => navigateCards('next')}
          disabled={!nav.next}
        >
          Next
        </Button>
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default Pokemon;
