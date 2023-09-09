import { ADD_FAV, REMOVE_FAV } from './actionTypes'; 

const initialState = {
   myFavorites: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_FAV:
         return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
         };

      case REMOVE_FAV:
         const updatedFavorites = state.myFavorites.filter(
            (character) => character.id !== parseInt(action.payload)
         );

         return {
            ...state,
            myFavorites: updatedFavorites,
         };

      default:
         return state;
   }
};

export default reducer;
