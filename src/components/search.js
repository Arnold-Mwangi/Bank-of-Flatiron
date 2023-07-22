import React, { useState } from 'react';
export default function Search({ onSearch }) {

    const [search, setsearch] = useState('');
    const [searchBy, setSearchBy] = useState('description');

    const handleSearch = () => {
        onSearch(search, searchBy)
    };

    return (
        <div>
            <input
                typr="text"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                placeholder='Search....'
            />
            <div>
                <label>
                    <input
                    type="radio"
                    value="description"
                    checked={searchBy === 'description'}
                    onChange={()=>setSearchBy('description')}
                    />
                    Description
                </label>
                <label>
                    <input
                    type="radio"
                    value="category"
                    checked={searchBy === 'category'}
                    onChange={()=>setSearchBy('category')}
                    />
                    Category
                </label>
                <label>
                    <input
                    type="radio"
                    value="date"
                    checked={searchBy === 'date'}
                    onChange={()=>setSearchBy('date')}
                    />
                    Date
                </label>
                <label>
                    <input
                    type="radio"
                    value="amount"
                    checked={searchBy === 'amount'}
                    onChange={()=>setSearchBy('amount')}
                    />
                    Amount
                </label>
            </div>
            <button onClick={handleSearch}>Search</button>
        </div>
    );

}
