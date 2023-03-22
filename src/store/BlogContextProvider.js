import React, { createContext } from 'react';

const BlogContext = createContext();

export const BlogContextProvider = (props) => {
    return <BlogContext.Provider value={'baran'}>
        {props.children}
    </BlogContext.Provider>
}

export default BlogContext;