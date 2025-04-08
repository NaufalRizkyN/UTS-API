// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { generateSolution } = require('./solution');

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost/curhatku', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Schema untuk curhatan
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    isPrivate: Boolean,
    user: String,
    date: String,
    solution: String,
});

const Post = mongoose.model('Post', postSchema);

// Rute dasar untuk root URL
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to CurhatKu API' });
});

// Endpoint untuk mendapatkan semua curhatan
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
});

// Endpoint untuk menambahkan curhatan baru
app.post('/posts', async (req, res) => {
    try {
        const post = new Post({
            ...req.body,
            solution: generateSolution(req.body.content),
        });
        await post.save();
        res.json(post);
    } catch (error) {
        console.error('Error adding post:', error);
        res.status(500).json({ error: 'Error adding post' });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});