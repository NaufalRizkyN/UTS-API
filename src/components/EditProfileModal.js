// src/components/EditProfileModal.js
import React, { useState } from 'react';
import './EditProfileModal.css';

const EditProfileModal = ({ onClose }) => {
    const [name, setName] = useState('Ainul');
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/30');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Di sini Anda bisa menyimpan perubahan ke backend atau state global
        console.log('Profile updated:', { name, profileImage });
        onClose(); // Tutup modal setelah submit
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Profil</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nama:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>URL Gambar Profil:</label>
                        <input
                            type="text"
                            value={profileImage}
                            onChange={(e) => setProfileImage(e.target.value)}
                            placeholder="Masukkan URL gambar"
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="submit">Simpan</button>
                        <button type="button" onClick={onClose}>Batal</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;