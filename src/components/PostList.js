// src/components/PostList.js
import React from 'react';

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            <h3>Curhatan Terbaru</h3>
            {posts && posts.length > 0 ? (
                posts.map((post, index) => {
                    // Debugging: Log setiap post untuk memastikan data benar
                    console.log('Post:', post);
                    // Gunakan post.isPrivate (MongoDB) atau post.is_private (MySQL)
                    return !(post.isPrivate || post.is_private) && (
                        <div key={index} className="post-card">
                            <div className="post-header">
                                <span>{post.user} • {post.date}</span>
                            </div>
                            <h4>{post.title}</h4>
                            <p>{post.content.slice(0, 100)}...</p>
                            {post.solution && (
                                <div className="solution">
                                    <strong>Solusi:</strong> {post.solution}
                                </div>
                            )}
                        </div>
                    );
                })
            ) : (
                <p>Belum ada curhatan publik.</p>
            )}
        </div>
    );
};

export default PostList;