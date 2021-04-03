import React from 'react';

const Searchbox = ({searchChange}) =>
{
    return (
        <input type='search' placeholder='robotsnames' onChange={searchChange}/>
    );
}
export default Searchbox;