import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilDuzenle = ({ kursiyerBilgileri, onGuncelle }) => {
    // Ad soyad ve e-posta bilgileri sabit, telefon ve adres düzenlenebilir
    const [telefon, setTelefon] = useState('');
    const [adres, setAdres] = useState('');

    // kursiyerBilgileri prop değiştiğinde telefon ve adresi güncelle
    useEffect(() => {
        if (kursiyerBilgileri) {
            setTelefon(kursiyerBilgileri.telefon || '');
            setAdres(kursiyerBilgileri.adres || '');
        }
    }, [kursiyerBilgileri]);

    const handleProfilGuncelle = async (e) => {
        e.preventDefault();
        try {
            if (!kursiyerBilgileri || !kursiyerBilgileri.id) {
                console.error("Kursiyer ID tanımlı değil.");
                alert("Profil bilgileri yüklenirken bir hata oluştu. Lütfen sayfayı yeniden yükleyin.");
                return;
            }

            const response = await axios.post(
                `http://localhost:8000/api/kursiyer/guncelle/${kursiyerBilgileri.id}`, // dinamik id kullanımı
                { 
                    adSoyad: kursiyerBilgileri.ad_soyad, 
                    email: kursiyerBilgileri.email, 
                    telefon, 
                    adres 
                }, 
                { withCredentials: true }
            );
            alert(response.data.message);
            onGuncelle({ ...kursiyerBilgileri, telefon, adres });
        } catch (error) {
            console.error('Profil güncellenemedi:', error);
            alert('Profil güncellenemedi. Lütfen tekrar deneyin.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Profil Düzenle</h3>
            <form onSubmit={handleProfilGuncelle}>
                <div style={{ marginBottom: '15px' }}>
                    <label><strong>Ad Soyad:</strong></label>
                    <p>{kursiyerBilgileri.ad_soyad}</p>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label><strong>E-Posta:</strong></label>
                    <p>{kursiyerBilgileri.email}</p>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="telefon"><strong>Telefon:</strong></label>
                    <input
                        type="text"
                        id="telefon"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        value={telefon}
                        onChange={(e) => setTelefon(e.target.value)}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="adres"><strong>Adres:</strong></label>
                    <input
                        type="text"
                        id="adres"
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        value={adres}
                        onChange={(e) => setAdres(e.target.value)}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Kaydet
                </button>
            </form>
        </div>
    );
};

export default ProfilDuzenle;
