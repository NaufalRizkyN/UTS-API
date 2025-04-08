// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProfileModal from './EditProfileModal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProfileClick = () => {
        setIsModalOpen(true);
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                CurhatKu
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Beranda</Link>
                    </li>
                    <li>
                        <Link to="/curhat-baru">Curhat Baru</Link>
                    </li>
                    <li>
                        <Link to="/curhat-saya">Curhat Saya</Link>
                    </li>
                </ul>
            </nav>
            <div className="profile" onClick={handleProfileClick}>
                <img
                    src="https://via.placeholder.com/30"
                    alt="Profile"
                />
                Rafif
            </div>
            {isModalOpen && (
                <EditProfileModal onClose={() => setIsModalOpen(false)} />
            )}
        </header>
    );
};

export default Header;