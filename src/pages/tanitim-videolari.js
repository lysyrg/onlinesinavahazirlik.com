import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini içe aktarıyoruz

const TanitimVideolari = () => {
    return (
        <div>
           

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
                                            <Link to="#" className="rbt-badge-2">
                                                <div className="image">
                                                    <img src="assets/images/testimonial/client-02.png" alt="Education Images" />
                                                </div>
                                                Başarı İçin Gereken Tek Şey:
                                                <strong>Doğru Eğitim</strong>
                                            </Link>
                                        </div>
                                        <p className="description has-medium-font-size mt--20">
                                        Canlı dersler ve kapsamlı içeriklerle, YDS başarınız için ihtiyacınız olan her şey burada.
                                        </p>

                                        <div className="slider-btn rbt-button-group justify-content-start">
                                            <Link className="rbt-btn btn-gradient radius-round hover-icon-reverse" to="/login">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Kursa Kayıt Ol</span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                </span>
                                            </Link>
                                            <Link className="rbt-btn radius-round hover-icon-reverse btn-white" to="/iletisim">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">İletişim</span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                </span>
                                            </Link>
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

export default TanitimVideolari;
