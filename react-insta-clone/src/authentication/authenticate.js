import React from 'react';

const authenticate = PostsPage => LoginPage => props => {
    if(localStorage.getItem("user")) {
        return <PostsPage />
    }
    return <LoginPage />
}    
export default authenticate;