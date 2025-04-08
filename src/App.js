// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Tips from './components/Tips';
import Home from './pages/Home';
import CreatePostPage from './pages/CreatePostPage';
import MyPosts from './pages/MyPosts';
import axios from 'axios';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);

    // Fungsi untuk mengambil data curhatan
    const fetchPosts = () => {
        axios.get('http://localhost:5000/posts')
            .then(response => {
                console.log('Posts fetched:', response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    };

    // Ambil data saat aplikasi dimuat
    useEffect(() => {
        fetchPosts();
    }, []);

    // Tambah curhat baru dan perbarui daftar
    const addPost = (newPost) => {
        axios.post('http://localhost:5000/posts', newPost)
            .then(response => {
                console.log('Post added:', response.data);
                fetchPosts(); // Ambil ulang data setelah curhat baru ditambahkan
            })
            .catch(error => {
                console.error('Error adding post:', error);
            });
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home posts={posts} />} />
                        <Route path="/curhat-baru" element={<CreatePostPage addPost={addPost} />} />
                        <Route path="/curhat-saya" element={<MyPosts posts={posts} />} />
                    </Routes>
                    <Tips />
                </div>
            </div>
        </Router>
    );
}

export default App;