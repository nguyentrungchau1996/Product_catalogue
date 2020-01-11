// Libraries
import React from 'react';

// Components
import SearchFilter from '../SearchFilter/SearchFilter';
import Products from '../Products/Products';

const MainSection = () => {
    return (
        <div>
            <SearchFilter />

            <Products />
        </div>
    );
};

export default MainSection;