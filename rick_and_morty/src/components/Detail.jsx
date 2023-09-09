import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
 
    useEffect(() => {
       axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
          if (data.name) {
             setCharacter(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
       return () => setCharacter({});
    }, [id]);
 
    return (
       <div>
          {character.name && <h2>Nombre: {character.name}</h2>}
          {character.status && <p>Status: {character.status}</p>}
          {character.species && <p>Especie: {character.species}</p>}
          {character.gender && <p>Género: {character.gender}</p>}
          {character.origin && <p>Origen: {character.origin.name}</p>}
          {character.image && <img src={character.image} alt={character.name} />}
       </div>
    );
 }
 
export default Detail;
