import React, { useState } from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    // Ejecutar la función onSearch y pasar el término de búsqueda como argumento
    props.onSearch(searchTerm);

    // Limpiar el campo de búsqueda después de agregar
    setSearchTerm('');
  };

  return (
    <div>
      <input
        type='search'
        placeholder='Buscar personaje...'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleAddClick}>Agregar</button>
    </div>
  );
}
