import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogContextProvider = (props) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const values = {
        currentSlideIndex,
        setCurrentSlideIndex
    }

    return <BlogContext.Provider value={values}>
        {props.children}
    </BlogContext.Provider>
}