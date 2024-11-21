import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Egitimlerim = ({ userId, kursAdi }) => {
    const [dersler, setDersler] = useState([]);
    const [seciliVideo, setSeciliVideo] = useState(null);

    // Kullanıcının derslerini ve videolarını çekme
    useEffect(() => {
        const fetchDerslerVeVideolar = async () => {
            try {
                // 1. Dersleri çekiyoruz
                const dersResponse = await axios.get('https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/kursiyer-dersler', { withCredentials: true });
                console.log('Dersler:', dersResponse.data);

                if (dersResponse.data && dersResponse.data.length > 0) {
                    // 2. Her ders için videoları çekiyoruz
                    const derslerWithVideos = await Promise.all(dersResponse.data.map(async (ders) => {
                        const videoResponse = await axios.get(`https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/ders-videolari/${ders.id}`);
                        ders.videolar = videoResponse.data;  // Dersin videolarını ekliyoruz
                        return ders;
                    }));

                    setDersler(derslerWithVideos); // Dersler ve videoları state'e set ediyoruz
                }
            } catch (error) {
                console.error('Dersler ve videolar alınamadı:', error);
            }
        };

        fetchDerslerVeVideolar();
    }, [userId]); // userId değiştiğinde dersleri yeniden al

    const handleVideoClick = (video) => {
        // Video tıklandığında iframe'de gösterilecek video seçiliyor
        setSeciliVideo(video);
    };

    return (
        <div className="egitimlerim">
            {/* CSS'i buraya ekliyoruz */}
            <style>
                {`
                .egitimlerim {
                    font-family: Arial, sans-serif;
                    color: #333;
                }
                .kurs-basligi {
                    font-size: 24px;
                    font-weight: bold;
                    color: #4CAF50;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .secili-video-container {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .secili-video-baslik {
                    font-size: 20px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 10px;
                }
                .video-iframe-container {
                    padding: 56.25% 0 0 0;
                    position: relative;
                    margin: 0 auto;
                    max-width: 800px;
                }
                .ders-listesi {
                    margin-top: 20px;
                }
                .ders-konteyner {
                    margin-bottom: 20px;
                    padding: 15px;
                    border-bottom: 1px solid #ddd;
                }
                .ders-baslik {
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .video-listesi {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .video-liste-ogesi {
                    margin-bottom: 10px;
                }
                .video-buton {
                    cursor: pointer;
                    color: #007BFF;
                    background: none;
                    border: none;
                    font-size: 16px;
                    text-decoration: underline;
                    padding: 0;
                }
                .video-buton:hover {
                    color: #0056b3;
                }
                .bos-mesaj {
                    color: #777;
                    font-style: italic;
                    text-align: center;
                }
                `}
            </style>

            {/* Kurs Adı Başlığı */}
            <h2 className="kurs-basligi">{kursAdi} Kurs Videoları</h2>

            {/* Seçilen Video Başlığı ve İframe */}
            {seciliVideo && (
                <div className="secili-video-container">
                    <h3 className="secili-video-baslik">{seciliVideo.video_adi}</h3>
                    <div
                        className="video-iframe-container"
                        dangerouslySetInnerHTML={{
                            __html: seciliVideo.embed_kodu // Embed kodunu direkt olarak yerleştiriyoruz
                        }}
                    ></div>
                </div>
            )}

            {/* Ders Listesini Ekranda Görüntüle */}
            <div className="ders-listesi">
                {dersler.length > 0 ? (
                    dersler.map((ders, index) => (
                        <div key={index} className="ders-konteyner">
                            <h4 className="ders-baslik">{ders.ders_adi}</h4>

                            {/* Videoları listeliyoruz */}
                            {ders.videolar && ders.videolar.length > 0 && (
                                <ul className="video-listesi">
                                    {ders.videolar.map((video, idx) => (
                                        <li key={idx} className="video-liste-ogesi">
                                            {/* Video adına tıklayınca handleVideoClick çalışacak */}
                                            <button 
                                                onClick={() => handleVideoClick(video)} 
                                                className="video-buton"
                                            >
                                                {video.video_adi}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="bos-mesaj">Henüz dersler yüklenmedi.</p>
                )}
            </div>
        </div>
    );
};

export default Egitimlerim;
