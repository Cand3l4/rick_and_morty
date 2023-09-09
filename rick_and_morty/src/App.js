import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './About';
import Detail from './components/Detail';
import { useNavigate } from 'react-router-dom';


function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword';


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   


   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const updatedCharacters = characters.filter(
         (character) => character.id !== parseInt(id)
      );

      setCharacters(updatedCharacters);
   };

   return (
      <div className='App'>
         {shouldShowNav(location) && <Nav />}
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} /> {/* Agrega la ruta para About */}
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );

   function shouldShowNav(location) {
      return location.pathname !== '/';
   }
   
}

export default App;
