import React from 'react';

const SearchFill = () =>
{

    return (
        <>
            <div className="subtitle">Search</div>
            <br/>
            <div class="ui-input-container">
            <input
                required=""
                placeholder="Type something..."
                class="ui-input"
                type="text"
            />
            <div class="ui-input-underline"></div>
            <div class="ui-input-highlight"></div>
            <div class="ui-input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                ></path>
                </svg>
            </div>
            </div>  
        </>
      );
    };

export default SearchFill;