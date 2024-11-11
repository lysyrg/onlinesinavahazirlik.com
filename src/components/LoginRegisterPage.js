import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './inc_header';

const LoginRegisterPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    email: '',
    adSoyad: '',
    kurs: '',
    telefon: '',
    password: '',
    confirmPassword: ''
  });

  // Giriş formu değişikliklerini yönetme
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Kayıt formu değişikliklerini yönetme
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  // Giriş formu gönderimi
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://onlinesinavahazirlik.com/onlinesinavahazirlik-backend/public/login', loginData, { withCredentials: true });
      if (response.data.message === 'Giriş başarılı') {
        alert(response.data.message);
        navigate('/kursiyer-kursu');
      } else {
        alert('Giriş işlemi başarısız. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Giriş işlemi başarısız:', error);
      alert('Giriş işlemi başarısız. Lütfen tekrar deneyin.');
    }
  };

  // Kayıt formu gönderimi
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
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
    <div className="rbt-header-sticky">
      <Header />
      <style>
        {`
    /* Form grupları için temel stil */
    .form-group {
        position: relative;
        margin-bottom: 25px; /* Alt boşluğu artırarak aralıkları açtık */
    }

    /* Input alanları */
    .form-group input, 
    .form-group select {
        width: 100%;
        padding: 12px; /* İç boşluğu biraz artırdık */
        font-size: 16px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        outline: none;
    }

    /* Focus durumunda input alanları */
    .form-group input:focus, 
    .form-group select:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    /* Etiketler */
    .form-group label {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        padding: 0 5px;
        font-size: 18px; /* Etiketlerin boyutunu büyüttük */
        color: #000 !important; /* Etiket rengini siyah zorunlu yaptık */
        transition: all 0.2s ease;
    }

    /* Input dolu olduğunda veya odakta iken etiketlerin yukarı kayması */
    .form-group input:focus + label,
    .form-group input:not(:placeholder-shown) + label,
    .form-group select:focus + label,
    .form-group select:not([value=""]) + label {
        top: -10px;
        left: 10px;
        font-size: 14px; /* Küçük etiketi biraz büyüttük */
        color: #007bff !important;
    }

    /* Focus-border alt çizgi efekti */
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

    /* Giriş Yap ve Kayıt Ol Başlıkları */
    .rbt-contact-form .title {
        color: #00000 !important; /* Siyah renk zorunlu */
        font-size: 28px; /* Daha büyük font */
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
        z-index: 1;
        position: relative;
    }
        /* CSS */
.rbt-contact-form .form-group label {
    color: #00000 !important;
    font-size: 18px !important;
}

.rbt-contact-form .title {
    color: #00000 !important;
    font-size: 28px !important;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}

  `}
      </style>


      <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h2 className="title">Giriş Yap & Kayıt Ol</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-elements-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row gy-5 row--30">
            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <h3 className="title">Giriş Yap</h3>
                <form onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <input
                      name="email"
                      type="text"
                      onChange={handleLoginChange}
                      value={loginData.email}
                      required
                    />
                    <label className={isInputFilled(loginData.email) ? 'active' : ''}>E-Posta *</label>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      onChange={handleLoginChange}
                      value={loginData.password}
                      required
                    />
                    <label className={isInputFilled(loginData.password) ? 'active' : ''}>Şifre *</label>
                    <span className="focus-border"></span>
                  </div>

                  <div className="row mb--30">
                    <div className="col-lg-6">
                      <div className="rbt-checkbox">
                        <input type="checkbox" id="rememberme" name="rememberme" />
                        <label htmlFor="rememberme">Beni Hatırla</label>
                      </div>
                    </div>
                    <div className="col-lg-6 text-end">
                      <Link to="#" className="rbt-btn-link">Şifremi Unuttum</Link>
                    </div>
                  </div>

                  <div className="form-submit-group">
                    <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Giriş</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
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
                      style={{ fontSize: '16px', padding: '10px' }}
                      required
                    >
                      <option value="">Kurs Seçin*</option>
                      <option value="KPSS">KPSS Kursu</option>
                      <option value="DGS">DGS Kursu</option>
                      <option value="ALES">ALES Kursu</option>
                      <option value="YDS">YDS Kursu</option>
                    </select>
                    <label className={isInputFilled(registerData.kurs) ? 'active' : ''}>Kurs Seçin*</label>
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
                    <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Kayıt Ol</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
