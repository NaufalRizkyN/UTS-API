// src/pages/CreatePostPage.js
import React from 'react';
import CreatePost from '../components/CreatePost';

const CreatePostPage = ({ addPost }) => {
    return (
        <div className="content">
            <CreatePost addPost={addPost} />
        </div>
    );
};

export default CreatePostPage;