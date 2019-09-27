import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../services";
import {
  MainWrapper,
  Title,
  ContentWrapper,
  Card,
  Button,
  ButtonWrapper
} from "./Pokemon.styles";
import Loader from "./Loader";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nav, setNav] = useState({ next: "", prev: "" });
  const [loading, setLoading] = useState(true);
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
    fetchData("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21");
  }, []);

  const navigateCards = async direction => {
    setLoading(true);
    fetchData(nav[direction]);
  };

  return (
    <MainWrapper>
      <Title>Pokemon</Title>
      <ContentWrapper>
        {pokemon.map(({ name, sprites }) => (
          <Card key={name}>
            <p>{name}</p>
            <img src={sprites.front_default} alt={name} />
          </Card>
        ))}
        {loading && <Loader />}
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          data-test="prev-button"
          onClick={() => navigateCards("prev")}
          disabled={!nav.prev}
        >
          Prev
        </Button>
        <Button
          data-test="next-button"
          onClick={() => navigateCards("next")}
          disabled={!nav.next}
        >
          Next
        </Button>
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default Pokemon;
