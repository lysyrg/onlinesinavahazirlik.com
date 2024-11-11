import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ProfilDuzenle from './ProfilDuzenle';
import Dokumanlar from './Dokumanlar';
import ZoomIndirmeLinkleri from './ZoomIndirmeLinkleri';
import DersProgrami from './DersProgrami';

const KursiyerKursu = () => {
    const [kursiyerBilgileri, setKursiyerBilgileri] = useState({});
    const [dersler, setDersler] = useState([]);
    const [seciliDers, setSeciliDers] = useState(null);
    const [videolar, setVideolar] = useState([]);
    const [seciliVideo, setSeciliVideo] = useState(null); // Secili video tanımlandı
    const [aktifSayfa, setAktifSayfa] = useState('Eğitimlerim');

    const navigate = useNavigate();

    // Kursiyer bilgilerini ve dersleri çekme
    useEffect(() => {
        const fetchKursiyerBilgileri = async () => {
            try {
                const response = await axios.get('https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/kursiyer', { withCredentials: true });
                setKursiyerBilgileri(response.data);

                if (response.data.kurs) { // kurs_id yerine kursu doğrudan kontrol ettik
                    fetchDersler(response.data.kurs);
                }
            } catch (error) {
                console.error('Kursiyer bilgileri çekilemedi:', error.response ? error.response.data : error.message);
            }
        };

        const fetchDersler = async (kursAdi) => {
            try {
                const response = await axios.get(`https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/kursiyer-dersler`, { withCredentials: true });
                setDersler(response.data);
            } catch (error) {
                console.error('Dersler çekilemedi:', error.response ? error.response.data : error.message);
            }
        };

        fetchKursiyerBilgileri();
    }, []);

    // Videoları belirli bir ders için çekme
    const fetchVideolar = async (dersId) => {
        try {
            const response = await axios.get(`https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/ders-videolari/${dersId}`, { withCredentials: true });
            setVideolar(response.data);
        } catch (error) {
            console.error('Videolar çekilemedi:', error.response ? error.response.data : error.message);
        }
    };

    // Ders seçildiğinde videoları getir
    const handleDersSecimi = (ders) => {
        setSeciliDers(ders);
        fetchVideolar(ders.id);
    };

    // Kullanıcı çıkış işlemi
    const handleLogout = async () => {
        try {
            await axios.post('https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/logout', {}, { withCredentials: true });
            navigate('/');
        } catch (error) {
            console.error('Çıkış yapılamadı:', error);
            alert('Çıkış işlemi başarısız. Lütfen tekrar deneyin.');
        }
    };

    // Dersleri listele
    const renderDersler = () => {
        return dersler.map((ders, index) => (
            <h4 key={ders.id} onClick={() => handleDersSecimi(ders)} style={{ cursor: 'pointer', color: 'blue', margin: '10px 0' }}>
                {index + 1} - {ders.ders_adi}
            </h4>
        ));
    };

    // İçeriği render etme
    const renderContent = () => {
        switch (aktifSayfa) {
            case 'Profil Düzenle':
                return <ProfilDuzenle kursiyerBilgileri={kursiyerBilgileri} onGuncelle={setKursiyerBilgileri} />;
            case 'Dökümanlar':
                return <Dokumanlar />;
            case 'Zoom İndirme Linkleri':
                return <ZoomIndirmeLinkleri />;
            case 'Ders Programı':
                return <DersProgrami />;
            case 'Eğitimlerim':
            default:
                return (
                    <div>
                        <h3>{kursiyerBilgileri.kurs || 'Kurs bilgisi bulunamadı.'} </h3>
                        
                        {renderDersler()}
                        {seciliDers && (
                            <div>
                                <h4 style={{ marginTop: '20px', color: 'blue' }}>{seciliDers.ders_adi} Videoları</h4>
                                <ul>
                                    {videolar.map((video) => (
                                        <li key={video.id} onClick={() => setSeciliVideo(video)} style={{ cursor: 'pointer', color: 'darkblue', margin: '5px 0' }}>
                                            {video.video_adi}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {seciliVideo && (
                            <div style={{ marginTop: '20px' }}>
                                <iframe src={seciliVideo.video_linki} title={seciliVideo.video_adi} width="100%" height="500px"></iframe>
                            </div>
                        )}
                    </div>
                );
        }
    };

    return (
        <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="sidebar bg-light p-3 rounded shadow-sm">
                            <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Kursiyer Bilgileri</h5>
                            <p style={{ fontSize: '18px', fontWeight: 'normal', color: '#333' }}>
                                Hoşgeldiniz, {kursiyerBilgileri.ad_soyad || 'Kullanıcı'}
                            </p>
                            <ul className="list-group" style={{ fontSize: '18px' }}>
                                <li className="list-group-item d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => setAktifSayfa('Eğitimlerim')}>Kurslarım</li>
                                <li className="list-group-item d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => setAktifSayfa('Profil Düzenle')}>Profil Düzenle</li>
                                <li className="list-group-item d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => setAktifSayfa('Dökümanlar')}>Dökümanlar (PDF)</li>
                                <li className="list-group-item d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => setAktifSayfa('Zoom İndirme Linkleri')}>Zoom İndirme Linkleri</li>
                                <li className="list-group-item d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => setAktifSayfa('Ders Programı')}>Ders Programı</li>
                                <li className="list-group-item d-flex align-items-center text-danger" style={{ cursor: 'pointer' }} onClick={handleLogout}>Çıkış Yap</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KursiyerKursu;
