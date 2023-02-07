import { useState } from "react";

function Header({ onSearch }) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
    };
    const clearSearch = () => {
        setSearch('');
        onSearch('');
    };

    return (
        <div className="header">
            <h1 onClick={clearSearch}>Spell search</h1>
            <input onChange={handleSearch} value={search} placeholder='type spell' />
        </div>
    );
}
export default Header;