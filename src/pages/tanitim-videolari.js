import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini içe aktarıyoruz
import Header from '../components/inc_header';

const TanitimVideolari = () => {
    return (
        <div>
            <header>
                {/* Header bileşenini burada çağırabilirsiniz */}
                <Header />
            </header>

            <div className="rbt-banner-area rbt-banner-8 variation-01 bg_image bg_image--9">
                <div className="wrapper w-100">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 order-1 order-lg-1">
                                <div className="content">
                                    <div className="inner">
                                        <div className="rbt-badge-group justify-content-start">
                                            <span className="meta-text d-flex align-items-center"><span className="icon">🎬</span> Canlı Ders</span>
                                            <Link to="#" className="rbt-badge-2">
                                                <div className="image">
                                                    <img src="assets/images/testimonial/client-02.png" alt="Education Images" />
                                                </div>
                                                Başarı İçin Gereken Tek Şey:
                                                <strong>Doğru Eğitim</strong>
                                            </Link>
                                        </div>
                                        <p className="description has-medium-font-size mt--20">
                                            Uzman eğitmenlerle hazırlanmış içerikler ve interaktif derslerle, KPSS, DGS, ALES, YDS sınavlarında başarıya ulaşmanın anahtarı burada!
                                        </p>
                                        <div className="slider-btn rbt-button-group justify-content-start">
                                            <Link className="rbt-btn btn-gradient radius-round hover-icon-reverse" to="kurskayit">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Kursa Kayıt Ol</span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                                </span>
                                            </Link>
                                            <Link className="rbt-btn radius-round hover-icon-reverse btn-white" to="iletisim">
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
                    <div className="col-lg-6 col-md-6">
                        <div className="video-wrapper">
                            <h4>Matematik Tanıtım Videosu</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/3uJNgwnE6_w" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="video-wrapper">
                            <h4>Tarih Tanıtım Videosu</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/_iAA96I2VBQ" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className="row mt--30">
                    <div className="col-lg-6 col-md-6">
                        <div className="video-wrapper">
                            <h4>Türkçe Tanıtım Videosu</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/xigey0KeMsE" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="video-wrapper">
                            <h4>Vatandaşlık Tanıtım Videosu</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/uU7onPcJoqA" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className="row mt--30">
                    <div className="col-lg-12">
                        <div className="video-wrapper">
                            <h4>Coğrafya Tanıtım Videosu</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO5_ID" frameBorder="0" allowFullScreen></iframe>
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
                                    <li><i className="feather-check"></i>📚 Toplam 400 saat ONLINE (CANLI DERS)</li>
                                    <li><i className="feather-check"></i>👍5 adet kaynak</li>
                                    <li><i className="feather-check"></i>👍Tüm konulara ait konu anlatımı</li>
                                    <li><i className="feather-check"></i>👍Çıkmış sınav sorularının çözümü</li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h4 className="rbt-title-style-3 mb--20">Online KPSS Kursu</h4>
                                </div>
                                <ul className="rbt-list-style-1">
                                    <li><i className="feather-check"></i>👍Soru çözüm stratejileri</li>
                                    <li><i className="feather-check"></i>👍PDF doküman desteği</li>
                                    <li><i className="feather-check"></i>👍10 adet online deneme</li>
                                    <li><i className="feather-check"></i>👍Öğretmenin ders notları</li>
                                    <li><i className="feather-check"></i>👍KPSS kampı</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TanitimVideolari;
