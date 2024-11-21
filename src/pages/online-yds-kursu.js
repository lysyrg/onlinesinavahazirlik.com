import React from 'react';

const OnlineYDSKursu = () => {
  return (
    <div>


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
                      YDS'de başarıya giden yol burada başlıyor! Etkili ve interaktif derslerle dil sınavlarına güçlü bir hazırlık yapın, hedeflerinize ulaşın.
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

      <div className="split-inner">
        <span className="rbt-badge-6 bg-primary-opacity">Sınavlarda Fark Yarat, Geleceğini Şekillendir</span>
        <h4 className="title">Başarıya Giden Yolda, En Doğru Adres</h4>
        <p className="description">
          YDS, YÖKDİL sınavlarına en etkili hazırlık platformu. Online eğitimlerimizle hedeflerinize emin adımlarla ilerleyin"
        </p>

        <div className="layout-format-image mb--20">
          <img src="assets/images/splash/icons/post-format.png" alt="post Images" />
        </div>

        <h5 className="subtitle mb--20">YDS ONLINE EĞİTİM</h5>

        <div className="plan-offer-list-wrapper">
          <ul className="rbt-list-style-1">
            <li><i className="feather-check"></i>📚 Toplam 140 Saat ONLINE (CANLI DERS) Eğitim</li>
            <li><i className="feather-check"></i>👍Gramer konu anlatımı ve dil bilgisi konu testleri</li>
            <li><i className="feather-check"></i>👍Kelime bilgisi kitabı</li>
            <li><i className="feather-check"></i>👍Çıkmış sınav sorularının çözümü</li>
            <li><i className="feather-check"></i>👍Çıkmış sorular paralelinde hazırlanmış İngilizce soru bankası kitabı</li>
            <li><i className="feather-check"></i>👍YDS okuma kitabı</li>
            <li><i className="feather-check"></i>👍YDS’ye yönelik özgün testler</li>
            <li><i className="feather-check"></i>👍10 adet özgün deneme sınavı</li>
            <li><i className="feather-check"></i>👍Öğretmenin ders notları ve yaprak testleri</li>
          </ul>

        </div>
      </div>

      <div className="container mt--50">
        <div className="row">
          <h3>ÖRNEK DERS & SORU ÇÖZÜM VİDEOLARIMIZ</h3>
        </div>

        <div className="row mt--30">
          {/* 1. Embed Video - Örnek Soru Çözüm Videosu */}
          <div className="col-lg-12 col-md-12 mb--30">
            <h4>Örnek Soru Çözüm Videosu</h4>
            <div className="video-wrapper" style={{ position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden" }}>
              <iframe
                src="https://player.vimeo.com/video/1031471629?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Online YDS Kursu Örnek Soru Çözüm Videosu"
              ></iframe>
            </div>
          </div>

          {/* Örnek Ders Videosu */}
          <div className="col-lg-12 col-md-12 mb--30">
            <h4>Örnek Ders Videosu</h4>
            <div className="video-wrapper" style={{ position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden" }}>
              <iframe
                src="https://player.vimeo.com/video/1025861989?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Örnek Ders Videosu"
              ></iframe>
            </div>
          </div>

          {/* 2. Embed Video - 1. Hafta 1,2,3,4. Ders Videoları */}
          <div className="col-lg-12 col-md-12 mb--30">
            <h4>1. Hafta 1,2,3,4. Ders Videoları</h4>
            <div className="video-wrapper" style={{ position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden" }}>
              <iframe
                src="https://player.vimeo.com/video/1030326070?h=2c6698a43e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="1. Hafta 1,2,3,4. Ders Videoları"
              ></iframe>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
};

export default OnlineYDSKursu;
