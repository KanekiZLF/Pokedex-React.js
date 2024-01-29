// Home.js (Seu componente principal)
import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import { Skeletons } from '../components/Skeletons';
import LoadMoreBT from '../components/Buttons/loadMore';
import ScrollTop from '../components/Buttons/scrollToTop';
import Footer from './Footer'

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [value, newValue] = useState(61);  
    
  useEffect(() => {
    getPokemons();
  });

  const updateValue = otherValue => {
    newValue(otherValue);
  };

  const getPokemons = () => {
    
    var endPoints = []

    for (var i = 1; i < value; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    axios.all(endPoints.map((endPoint) => axios.get(endPoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };
  
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <PokemonCard
                  name={capitalizeFirstLetter(pokemon.data.name)}
                  image={pokemon.data.sprites.other.dream_world.front_default}
                  types={pokemon.data.types}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
      <div id='finalButton'>
        <LoadMoreBT updateNewValue={updateValue} getPokemons={getPokemons} />
      </div>
        <ScrollTop />
        <Footer />
    </div>
  );
};
