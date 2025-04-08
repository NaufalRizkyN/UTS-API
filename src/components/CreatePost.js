// src/components/CreatePost.js
import React, { useState } from 'react';

const CreatePost = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content,
            isPrivate,
            user: 'Ainul',
            date: new Date().toLocaleDateString(),
            solution: '', // Solusi akan diisi oleh backend
        };
        addPost(newPost);
        setTitle('');
        setContent('');
        setIsPrivate(false);
    };

    return (
        <div className="create-post">
            <h2>Buat Curhat Baru</h2>
            <p>Bagikan ceritamu kepada komunitas atau simpan untuk dirimu sendiri</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Judul curhatanmu..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Ceritakan curhatanmu di sini..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={isPrivate}
                        onChange={() => setIsPrivate(!isPrivate)}
                    />
                    Privat
                </label>
                <button type="submit">Kirim Curhatan</button>
            </form>
        </div>
    );
};

export default CreatePost;