import React from 'react';

const OnlineALESKursu = () => {
  return (
    <div className="rbt-header-sticky">
    

      <div className="rbt-banner-area rbt-banner-8 variation-01 bg_image bg_image--9">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-1 order-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="rbt-badge-group justify-content-start">
                      <span className="meta-text d-flex align-items-center">
                        <span className="icon">🎬</span> Canlı Ders
                      </span>
                      <a href="#" className="rbt-badge-2">
                        <div className="image">
                          <img src="assets/images/testimonial/client-02.png" alt="Education Images" />
                        </div>
                        Başarı İçin Gereken Tek Şey: <strong>Doğru Eğitim</strong>
                      </a>
                    </div>
                    <h1 className="title">ALES Kursu</h1>
                    <p className="description has-medium-font-size mt--20">
                      Uzman eğitmenlerle hazırlanmış içerikler ve interaktif derslerle ALES sınavlarında başarıya ulaşmanın anahtarı burada!
                    </p>
                    <div className="slider-btn rbt-button-group justify-content-start">
                      <a className="rbt-btn btn-gradient radius-round hover-icon-reverse" href="/login">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Kursa Kayıt Ol</span>
                          <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                          <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        </span>
                      </a>
                      <a className="rbt-btn radius-round hover-icon-reverse btn-white" href="/iletisim">
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
              <h4>Örnek Matematik Ders Videosu</h4>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/4X4gQ5qTwCA" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="row mt--30">
          <div className="col-lg-6 col-md-6">
            <div className="video-wrapper">
              <h4>Örnek Türkçe Ders Videosu</h4>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/IRSDuVR0kCc" frameBorder="0" allowFullScreen></iframe>
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
                  <li><i className="feather-check"></i>📚 Toplam 168 saat ONLINE (CANLI DERS) </li>
                  <li><i className="feather-check"></i>👍5 adet kaynak</li>
                  <li><i className="feather-check"></i>👍Tüm konulara ait konu anlatımı</li>
                  <li><i className="feather-check"></i>👍Çıkmış sınav sorularının çözümü</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="section-title">
                  <h4 className="rbt-title-style-3 mb--20">Online ALES Kursu</h4>
                </div>
                <ul className="rbt-list-style-1">
                  <li><i className="feather-check"></i>👍Soru çözüm stratejileri</li>
                  <li><i className="feather-check"></i>👍PDF doküman desteği</li>
                  <li><i className="feather-check"></i>👍10 adet online deneme</li>
                  <li><i className="feather-check"></i>👍Öğretmenin ders notları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area copyright-style-1 ptb--20 bg-color-darker">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p className="rbt-link-hover text-center color-white-off">developer freelancewebseo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineALESKursu;
