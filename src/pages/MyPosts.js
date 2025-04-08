// src/pages/MyPosts.js
import React from 'react';
import PostList from '../components/PostList';

const MyPosts = ({ posts }) => {
    // Filter curhatan milik pengguna (Ainul)
    const userPosts = posts.filter(post => post.user === 'Ainul');

    return (
        <div className="content">
            <h2>Curhat Saya</h2>
            <PostList posts={userPosts} />
        </div>
    );
};

export default MyPosts;