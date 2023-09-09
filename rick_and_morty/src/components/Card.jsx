import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from './actions';
import { connect } from 'react-redux';

function Card(props) {
   const { name, status, species, gender, origin, image, id } = props.character; 
   const handleCloseClick = () => {
      if (props.onClose) {
         props.onClose();
      }
   };

   const handleFavorite = () => {
      if (isFav) {
         props.removeFavorite(id); 
      } else {
         props.addFavorite(props.character); 
      }
      setIsFav(!isFav);
   };

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      const isCharacterInFavorites = props.myFavorites.some((fav) => fav.id === id);
      setIsFav(isCharacterInFavorites);
   }, [props.myFavorites, id]);

   return (
      <div className="card">
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={handleCloseClick}>X</button>
         <Link to={`/detail/${id}`}>{name}</Link>
         <h2>{name}</h2>
         <p>Status: {status}</p>
         <p>Especie: {species}</p>
         <p>Género: {gender}</p>
         <p>Origen: {origin.name}</p>
         <img src={image} alt={name} />
      </div>
   );
}

const mapStateToProps = (state) => ({
   myFavorites: state.myFavorites, 
});

const mapDispatchToProps = (dispatch) => ({
   addFavorite: (character) => dispatch(addFav(character)),
   removeFavorite: (id) => dispatch(removeFav(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
