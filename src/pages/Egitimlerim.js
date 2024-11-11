import React, { useState, useEffect } from 'react';
import axios from 'axios';

const accessToken = '675edef39a1f37a9948397991c251f62'; // Vimeo Access Token

const Egitimlerim = ({ kursAdi }) => {
    const [dersler, setDersler] = useState([]);
    const [seciliVideo, setSeciliVideo] = useState(null);

    useEffect(() => {
        const fetchVimeoVideos = async () => {
            try {
                const response = await axios.get(`https://api.vimeo.com/me/videos`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                const videoData = response.data.data;
                setDersler(videoData); // Tüm videoları ayarla
            } catch (error) {
                console.error('Vimeo videoları çekilemedi:', error.response ? error.response.data : error.message);
            }
        };

        fetchVimeoVideos();
    }, [kursAdi]);

    return (
        <div className="egitimlerim" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{kursAdi} Kurs Videoları</h2>

            {/* Seçilen Video Oynatma Alanı */}
            {seciliVideo ? (
                <div className="video-player" style={{ marginBottom: '30px' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{seciliVideo.name}</h3>
                    <iframe
                        src={`https://player.vimeo.com/video/${seciliVideo.uri.split('/').pop()}`}
                        width="100%"
                        height="500"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={seciliVideo.name}
                    ></iframe>
                </div>
            ) : (
                <p style={{ fontSize: '1.2rem', color: 'gray' }}>Bir videoya tıklayın.</p>
            )}

            {/* Video Listesi */}
            <div className="video-list">
                {dersler.map((video, index) => (
                    <div
                        key={index}
                        className="video-item"
                        onClick={() => setSeciliVideo(video)}
                        style={{
                            cursor: 'pointer',
                            padding: '10px',
                            borderBottom: '1px solid #ddd',
                            fontSize: '1.2rem',
                            color: 'darkblue'
                        }}
                    >
                        {video.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Egitimlerim;
