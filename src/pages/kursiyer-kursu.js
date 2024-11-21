import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfilDuzenle from './ProfilDuzenle';
import Dokumanlar from './Dokumanlar';
import ZoomIndirmeLinkleri from './ZoomIndirmeLinkleri';
import Egitimlerim from './Egitimlerim';
import KursUcretiOdeme from './KursUcretiOdeme'; // Kurs Ücreti Ödeme bileşeni eklendi

const KursiyerKursu = () => {
    const [kursiyerBilgileri, setKursiyerBilgileri] = useState({});
    const [aktifSayfa, setAktifSayfa] = useState('Eğitimlerim'); // İlk açılış sayfası
    const navigate = useNavigate();

    // Kursiyer bilgilerini yükle
    useEffect(() => {
        const fetchKursiyerBilgileri = async () => {
            try {
                const response = await axios.get(
                    'https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/kursiyer',
                    { withCredentials: true }
                );
                setKursiyerBilgileri(response.data);
            } catch (error) {
                console.error(
                    'Kursiyer bilgileri çekilemedi:',
                    error.response ? error.response.data : error.message
                );
            }
        };

        fetchKursiyerBilgileri();
    }, []);

    // Kullanıcı çıkışı
    const handleLogout = async () => {
        try {
            await axios.post(
                'https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/api/logout',
                {},
                { withCredentials: true }
            );
            navigate('/');
        } catch (error) {
            console.error('Çıkış yapılamadı:', error);
            alert('Çıkış işlemi başarısız. Lütfen tekrar deneyin.');
        }
    };

    // Eğer kullanıcı aktif değilse uyarı mesajı göster
    if (kursiyerBilgileri.aktif !== 'aktif') {
        return (
            <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="sidebar bg-light p-3 rounded shadow-sm">
                                <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                                    Kursiyer Bilgileri
                                </h5>
                                <p style={{ fontSize: '18px', fontWeight: 'normal', color: '#333' }}>
                                    Hoşgeldiniz, {kursiyerBilgileri.ad_soyad || 'Kullanıcı'}
                                </p>
                                <ul className="list-group" style={{ fontSize: '18px' }}>
                                    <li
                                        className="list-group-item text-danger"
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleLogout}
                                    >
                                        Çıkış Yap
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="alert alert-warning" role="alert">
                                Hesabınız henüz aktif değil. Lütfen bizimle iletişime geçin.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Aktif sayfayı render etme
    const renderContent = () => {
        switch (aktifSayfa) {
            case 'Eğitimlerim':
                return <Egitimlerim kursAdi={kursiyerBilgileri.kurs} />;
            case 'Profil Düzenle':
                return <ProfilDuzenle kursiyerBilgileri={kursiyerBilgileri} onGuncelle={setKursiyerBilgileri} />;
            case 'Dökümanlar':
                return <Dokumanlar />;
            case 'Zoom İndirme Linkleri':
                return <ZoomIndirmeLinkleri />;
            case 'Kurs Ücreti Ödeme': // Yeni menü öğesi
                return <KursUcretiOdeme />;
            default:
                return <Egitimlerim kursAdi={kursiyerBilgileri.kurs} />;
        }
    };

    // Kullanıcı aktif ise menü ve içerik
    return (
        <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
                <div className="row">
                    {/* Sol Menü */}
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="sidebar bg-light p-3 rounded shadow-sm">
                            <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                                Kursiyer Bilgileri
                            </h5>
                            <p style={{ fontSize: '18px', fontWeight: 'normal', color: '#333' }}>
                                Hoşgeldiniz, {kursiyerBilgileri.ad_soyad || 'Kullanıcı'}
                            </p>
                            <ul className="list-group" style={{ fontSize: '18px' }}>
                                <li
                                    className="list-group-item d-flex align-items-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setAktifSayfa('Eğitimlerim')}
                                >
                                    Kurslarım
                                </li>
                                <li
                                    className="list-group-item d-flex align-items-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setAktifSayfa('Profil Düzenle')}
                                >
                                    Profil Düzenle
                                </li>
                                <li
                                    className="list-group-item d-flex align-items-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setAktifSayfa('Dökümanlar')}
                                >
                                    Dökümanlar (PDF)
                                </li>
                                <li
                                    className="list-group-item d-flex align-items-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setAktifSayfa('Zoom İndirme Linkleri')}
                                >
                                    Zoom İndirme Linkleri
                                </li>
                                <li
                                    className="list-group-item d-flex align-items-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setAktifSayfa('Kurs Ücreti Ödeme')}
                                >
                                    Kurs Ücreti Ödeme
                                </li>
                                <li
                                    className="list-group-item text-danger"
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleLogout}
                                >
                                    Çıkış Yap
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Sağ İçerik */}
                    <div className="col-lg-9 col-md-8 col-sm-12">{renderContent()}</div>
                </div>
            </div>
        </div>
    );
};

export default KursiyerKursu;
