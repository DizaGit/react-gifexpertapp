import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['']);
    // const handleAdd = () =>{
    //     // setCategories([...categories, 'Temp']);
    //     setCategories(c => [...c, 'Temp']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>
            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid 
                            category={category}
                            key={category}
                        ></GifGrid>
                    )
                }
            </ol>
        </>
    )
};

export default GifExpertApp;

