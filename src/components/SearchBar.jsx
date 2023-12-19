import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;