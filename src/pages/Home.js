// src/pages/Home.js
import React from 'react';
import PostList from '../components/PostList';

const Home = ({ posts }) => {
    return (
        <div className="content">
            <h2>Beranda</h2>
            <PostList posts={posts} />
        </div>
    );
};

export default Home;