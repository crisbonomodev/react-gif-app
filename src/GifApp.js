import React, { Fragment, useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    return(
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
                {
                    categories.map( (category) => {
                        return <GifGrid category={category}/>
                    })
                }
        </>
    );
}


