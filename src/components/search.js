import React, { useState } from 'react';
export default function Search({ onSearch }) {

    const [search, setsearch] = useState('');
    const [searchBy, setSearchBy] = useState('description');

    const handleSearch = () => {
        onSearch(search, searchBy)
    };

    return (
        <div className='landing'>
            <div className="overlay"></div>
            <div className='landing_page'>
            <div>
                <h1>Search for a transaction<br /> By</h1>

            </div>
            <div className='landing-content'>
                
                <label className="radio-label">
                    <input
                        type="radio"
                        value="description"
                        checked={searchBy === 'description'}
                        className='radio-input'
                        onChange={() => setSearchBy('description')}
                    />
                     <span className="custom-radio"></span>
                    Description
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="category"
                        checked={searchBy === 'category'}
                        className='radio-input'
                        onChange={() => setSearchBy('category')}
                    />
                     <span className="custom-radio"></span>
                    Category
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="date"
                        checked={searchBy === 'date'}
                        className='radio-input'
                        onChange={() => setSearchBy('date')}
                    />
                     <span className="custom-radio"></span>
                    Date
                </label>
                <label className="radio-label">
                    <input
                        type="radio"
                        value="amount"
                        checked={searchBy === 'amount'}
                        className='radio-input'
                        onChange={() => setSearchBy('amount')}
                    />
                     <span className="custom-radio"></span>
                    Amount
                </label>
            </div>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    placeholder='Search....'
                />
                <button className='search' onClick={handleSearch}><i className="fas fa-search"></i></button>
            </div>
            </div>
           

        </div>
        
    );

}
