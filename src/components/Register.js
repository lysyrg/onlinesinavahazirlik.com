import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    email: '',
    adSoyad: '',
    kurs: '',
    telefon: '',
    adres: '',
    password: '',
    confirmPassword: ''
  });

  // Kayıt formu değişikliklerini yönetme
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  // Kayıt formu gönderimi
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Şifre uzunluğunu kontrol et
    if (registerData.password.length < 6) {
      alert('Şifreniz en az 6 karakter olmalıdır.');
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      alert('Şifreler eşleşmiyor.');
      return;
    }

    try {
      const response = await axios.post('https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/register', registerData);
      alert(response.data.message);
    } catch (error) {
      console.error('Kayıt işlemi başarısız:', error);
      alert('Kayıt işlemi başarısız. Lütfen tekrar deneyin.');
    }
  };

  // Input dolu olduğunda label'ı yukarı taşıma kontrolü
  const isInputFilled = (value) => {
    return value && value.trim() !== '';
  };

  return (
    <div className="rbt-contact-form contact-form-style-1 max-width-auto">
      <style>
        {`
        .form-group {
            position: relative;
            margin-bottom: 25px;
        }

        .form-group input, 
        .form-group select {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            outline: none;
        }

        .form-group input:focus, 
        .form-group select:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        .form-group label {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #fff;
            padding: 0 5px;
            font-size: 18px;
            color: #000 !important;
            transition: all 0.2s ease;
        }

        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label,
        .form-group select:focus + label,
        .form-group select:not([value=""]) + label {
            top: -10px;
            left: 10px;
            font-size: 14px;
            color: #007bff !important;
        }

        .focus-border {
            position: absolute;
            bottom: 0;
            left: 10px;
            width: 0;
            height: 2px;
            background-color: #007bff;
            transition: 0.4s;
        }

        .form-group input:focus ~ .focus-border,
        .form-group select:focus ~ .focus-border {
            width: calc(100% - 20px);
        }

        .title {
            color: #000 !important;
            font-size: 28px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }

        .form-submit-group {
            text-align: center;
        }

        .form-submit-group button {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        .form-submit-group button:hover {
            background-color: #0056b3;
        }
        `}
      </style>
      <h3 className="title">Kayıt Ol</h3>
      <form onSubmit={handleRegisterSubmit}>
        <div className="form-group">
          <input
            name="email"
            type="email"
            onChange={handleRegisterChange}
            value={registerData.email}
            required
          />
          <label className={isInputFilled(registerData.email) ? 'active' : ''}>E-Posta *</label>
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <input
            name="adSoyad"
            type="text"
            onChange={handleRegisterChange}
            value={registerData.adSoyad}
            required
          />
          <label className={isInputFilled(registerData.adSoyad) ? 'active' : ''}>Ad Soyad*</label>
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <select
            name="kurs"
            onChange={handleRegisterChange}
            value={registerData.kurs}
            required
          >
            <option value="">Kurs Seçin*</option>
            <option value="YDS Kursu">YDS Kursu</option>
          </select>
          <label className={isInputFilled(registerData.kurs) ? 'active' : ''}>Kurs Seçin*</label>
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <input
            name="adres"
            type="text"
            onChange={handleRegisterChange}
            value={registerData.adres}
            required
          />
          <label className={isInputFilled(registerData.adres) ? 'active' : ''}>Adres *</label>
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <input
            name="telefon"
            type="text"
            onChange={handleRegisterChange}
            value={registerData.telefon}
            required
          />
          <label className={isInputFilled(registerData.telefon) ? 'active' : ''}>Telefon*</label>
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <input
            name="password"
            type="password"
            onChange={handleRegisterChange}
            value={registerData.password}
            required
          />
          <label className={isInputFilled(registerData.password) ? 'active' : ''}>Şifre *</label>
          <span className="focus-border"></span>
        </div>

        <div className="form-group">
          <input
            name="confirmPassword"
            type="password"
            onChange={handleRegisterChange}
            value={registerData.confirmPassword}
            required
          />
          <label className={isInputFilled(registerData.confirmPassword) ? 'active' : ''}>Şifre Doğrula *</label>
          <span className="focus-border"></span>
        </div>

        <div className="form-submit-group">
          <button type="submit">Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
