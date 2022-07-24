import React from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, key) => (
        <PokemonCard name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
