import React from 'react';
import Header from '../components/inc_header';

const OnlineYDSKursu = () => {
  return (
    <div>
      <Header />

      <div className="rbt-progress-parent">
        <svg className="rbt-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      <div className="rbt-banner-area rbt-banner-8 variation-01 bg_image bg_image--9">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-1 order-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="rbt-badge-group justify-content-start">
                      <span className="meta-text d-flex align-items-center"><span className="icon">🎬</span> Canlı Ders</span>
                      <a href="#" className="rbt-badge-2">
                        <div className="image">
                          <img src="assets/images/testimonial/client-02.png" alt="Education Images" />
                        </div>
                        Başarı İçin Gereken Tek Şey: <strong>Doğru Eğitim</strong>
                      </a>
                    </div>
                    <h1 className="title">YDS Kursu</h1>
                    <p className="description has-medium-font-size mt--20">
                      Dr. Yasin Aslan ile YDS'de başarıya giden yol burada başlıyor! Etkili ve interaktif derslerle dil sınavlarına güçlü bir hazırlık yapın, hedeflerinize ulaşın.
                    </p>
                    <div className="slider-btn rbt-button-group justify-content-start">
                      <a className="rbt-btn btn-gradient radius-round hover-icon-reverse" href="kurskayit.php">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Kursa Kayıt Ol</span>
                          <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                          <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        </span>
                      </a>
                      <a className="rbt-btn radius-round hover-icon-reverse btn-white" href="iletisim.php">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">İletişim</span>
                          <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                          <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt--50">
        <div className="row">
          <h3>ÖRNEK DERS & SORU ÇÖZÜM VİDEOLARIMIZ</h3>
          <div className="col-lg-6 col-md-6">
            <div className="video-wrapper">
              <h4>YDS Tanıtım Videosu</h4>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/jSXWPC7kumk" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="row mt--30">
          <div className="col-lg-6 col-md-6">
            <div className="video-wrapper">
              <h4>Örnek YDS Ders Videosu</h4>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/2wfgsRLVTm4" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="section-title">
                  <h4 className="rbt-title-style-3 mb--20">Eğitim İçeriği</h4>
                </div>
                <ul className="rbt-list-style-1">
                  <li><i className="feather-check"></i>📚 Toplam 140 Saat ONLINE (CANLI DERS) Eğitim</li>
                  <li><i className="feather-check"></i>👍Gramer konu anlatımı ve dil bilgisi konu testleri</li>
                  <li><i className="feather-check"></i>👍Kelime bilgisi kitabı</li>
                  <li><i className="feather-check"></i>👍Çıkmış sınav sorularının çözümü</li>
                </ul>
              </div>

              <div className="col-lg-6">
                <div className="section-title">
                  <h4 className="rbt-title-style-3 mb--20">Online YDS Kursu</h4>
                </div>
                <ul className="rbt-list-style-1">
                  <li><i className="feather-check"></i>👍Çıkmış sorular paralelinde hazırlanmış İngilizce soru bankası kitabı</li>
                  <li><i className="feather-check"></i>👍YDS okuma kitabı</li>
                  <li><i className="feather-check"></i>👍YDS’ye yönelik özgün testler</li>
                  <li><i className="feather-check"></i>👍10 adet özgün deneme sınavı</li>
                  <li><i className="feather-check"></i>👍Öğretmenin ders notları ve yaprak testleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineYDSKursu;
