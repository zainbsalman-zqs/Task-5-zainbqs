import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  price: string;
  image_url: string;
}

interface SearchProps {
  items: Array<Item>;
  setFilteredItems: React.Dispatch<React.SetStateAction<Item[]>>; 
}
function Search({ items, setFilteredItems }: SearchProps) {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredItems(filteredItems); 
  };
return (
<div className="d-flex flex-column align-items-center justify-content-between  w-50">
  <div className="position-relative w-100">
    <input
      type="text"
      value={search}
      placeholder="Search product by name"
      onChange={handleSearch}
      className="form-control py-2 custom-input fontsherch"
    />
    <img 
      src="/assets/img/search.png" 
      alt="search" 
      className="position-absolute top-50 end-0 pe-3   translate-middle-y" 
    />
  </div>
</div>
);
}

export default Search;
