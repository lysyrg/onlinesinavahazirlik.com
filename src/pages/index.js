import React from 'react';


// CSS dosyalarını buraya ekleyin
import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/vendor/slick.css';
import '../assets/css/plugins/sal.css';
import '../assets/css/plugins/feather.css';
import '../assets/css/plugins/fontawesome.min.css';
import '../assets/css/plugins/euclid-circulara.css';
import '../assets/css/plugins/swiper.css';
import '../assets/css/plugins/magnify.css';
import '../assets/css/plugins/odometer.css';
import '../assets/css/plugins/animation.css';
import '../assets/css/plugins/bootstrap-select.min.css';
import '../assets/css/plugins/plyr.css';


const IndexPage = () => {
  return (
    <div className="rbt-header-sticky">
     

      {/* Start Slider Area */}
      <div className="rbt-splash-slider d-flex align-items-center">
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12 col-xl-6 order-2 order-xl-1">
                <div className="inner">
                  <div className="banner-top">
                    <div className="banner-badge-top">
                      <div className="icon">
                        <div className="rating">
                          <a href="#"><i className="fa fa-star"></i></a>
                          <a href="#"><i className="fa fa-star"></i></a>
                          <a href="#"><i className="fa fa-star"></i></a>
                          <a href="#"><i className="fa fa-star"></i></a>
                          <a href="#"><i className="fa fa-star"></i></a>
                        </div>
                      </div>
                      <span className="subtitle">Zamana Uyum Sağla, Başarıyı Yakala</span>
                    </div>
                    <div className="banner-badge-top">
                      <div className="icon">
                        <img src="assets/images/icons/elite.svg" alt="Icons Images" />
                      </div>
                      <span className="subtitle">En İyi Eğitmenler</span>
                    </div>
                  </div>
                  <h1 className="title">Eğitimde Kalite, Sınavda Başarı<br />
                    <span className="cd-headline slide">
                      <span className="cd-words-wrapper">
                        <b className="is-hidden theme-gradient">Online Sınava Hazırlık.</b>
                        <b className="is-visible theme-gradient">Geleceğinize Yön Verin.</b>
                        <b className="is-hidden theme-gradient">Doğru Eğitim.</b>
                        <b className="is-hidden theme-gradient">Geleceğini Şekillendir.</b>
                        <b className="is-hidden theme-gradient">Hayalini Gerçekleştir.</b>
                        <b className="is-hidden theme-gradient">Hedefine Ulaş.</b>
                      </span>
                    </span>
                  </h1>
                  <p className="description">Başarı <strong>İçin</strong> tek yol
                    <strong>doğru</strong> eğitim.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                <div className="video-popup-wrapper">
                  <img className="w-100 rbt-radius" src="assets/images/splash/banner-group-image.png" alt="Video Images" />
                  <a className="rbt-btn rounded-player-2 popup-video position-to-top with-animation d-none" href="https://www.youtube.com/watch?v=nA1Aqp0sPQo">
                    <span className="play-icon"></span>
                  </a>
                  <div className="banner-group-shape">
                    <div className="shape-image scene shape-4">
                      <span data-depth="2">
                        <img src="assets/images/splash/icons/shape-4.png" alt="Shape Images" />
                      </span>
                    </div>
                    <div className="shape-image scene shape-5">
                      <span data-depth="-2">
                        <img src="assets/images/splash/icons/shape-5.png" alt="Shape Images" />
                      </span>
                    </div>
                    <div className="shape-image scene shape-6">
                      <span data-depth="5">
                        <img src="assets/images/splash/icons/shape-6.png" alt="Shape Images" />
                      </span>
                    </div>
                    <div className="shape-image scene shape-7">
                      <span data-depth="-3">
                        <img src="assets/images/splash/icons/shape-7.png" alt="Shape Images" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row">
                <div className="splash-service-main position-relative">
                  <div className="service-wrapper service-white">
                    <div className="row g-0">
                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img src="assets/images/icons/icons-01.png" alt="Icon Images" />
                          </div>
                          <div className="content">
                            <h4 className="title">Başarıya Giden Yolda, En Doğru Adres</h4>
                            <p>"KPSS, DGS, ALES ve YDS sınavlarına en etkili hazırlık platformu. Online eğitimlerimizle hedeflerinize emin adımlarla ilerleyin!"</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img src="assets/images/icons/icons-02.png" alt="Icon Images" />
                          </div>
                          <div className="content">
                            <h4 className="title">Sınavlara Hazır Ol, Hedefine Ulaş</h4>
                            <p>Tamamen online derslerle, her seviyeye uygun eğitim içerikleri. İstediğiniz zaman, istediğiniz yerden sınavlara hazırlanın.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img src="assets/images/icons/icons-03.png" alt="Icon Images" />
                          </div>
                          <div className="content">
                            <h4 className="title">Her Zaman, Her Yerde Sınava Hazırlık</h4>
                            <p>Esnek zamanlı eğitimlerimiz sayesinde sınavlara istediğiniz yerde ve zamanda hazırlanın. Sınav maratonunuza hız kazandırın.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                        <div className="service service__style--1">
                          <div className="icon">
                            <img src="assets/images/icons/icons-04.png" alt="Icon Images" />
                          </div>
                          <div className="content">
                            <h4 className="title">Başarı İçin Gereken Tek Şey: Doğru Eğitim</h4>
                            <p>Uzman eğitmenlerle hazırlanmış içerikler ve interaktif derslerle, KPSS, DGS, ALES, YDS sınavlarında başarıya ulaşmanın anahtarı burada.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="shape-wrapper">
          <div className="shape-image shape-1">
            <img src="assets/images/splash/icons/shape-1.png" alt="Shape Images" />
          </div>
          <div className="shape-image shape-2">
            <img src="assets/images/splash/icons/shape-2.png" alt="Shape Images" />
          </div>
          <div className="shape-image shape-3">
            <img src="assets/images/splash/icons/shape-3.png" alt="Shape Images" />
          </div>
        </div>
      </div>
      {/* End Slider Area */}

      

      {/* Start Elements Presentation Area */}
      <div className="rbt-elements-presentation-area overflow-hidden bg-color-white rbt-section-gapBottom pt--80">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">Sınavlara Hazırlıkta Güvenilir Kaynağınız</span>
                <h2 className="title"><strong className="theme-gradient">KPSS, DGS, ALES, YDS</strong> ONLINE KURS.</h2>
              </div>
            </div>
          </div>

          <div className="scroll-animation-all-wrapper">
            <div className="scroll-animation-wrapper mt--30">
              <div className="scroll-animation scroll-right-left">
                {/* Start Single Testimonial */}
                <div className="single-column-100">
                  <div className="rbt-categori-list">
                    <a href="#"><i className="feather-credit-card"></i> KPSS</a>
                    <a href="#"><i className="feather-folder"></i> ALES</a>
                    <a href="#"><i className="feather-heart"></i> DGS</a>
                    <a href="#"><i className="feather-link-2"></i> YDS</a>
                    <a href="#"><i className="feather-award"></i> ONLINE</a>
                    <a href="#"><i className="feather-layers"></i> KURS</a>
                    <a href="#"><i className="feather-log-in"></i> ONLINE KURS</a>
                    <a href="#"><i className="feather-hash"></i> UZAKTAN</a>
                    <a href="#"><i className="feather-grid"></i> UZAKTAN KURS</a>
                    <a href="#"><i className="feather-mail"></i> KPSS UZAKTAN</a>
                    <a href="#"><i className="feather-users"></i> DGS UZAKTAN</a>
                    <a href="#"><i className="feather-twitter"></i> ZOOM KPSS KURSU</a>
                    <a href="#"><i className="feather-image"></i> YDS ONLINE</a>
                    <a href="#"><i className="feather-dollar-sign"></i> ALES ONLINE</a>
                    <a href="#"><i className="feather-percent"></i> KPSS ONLINE</a>
                    <a href="#"><i className="feather-message-square"></i> UZAKTAN KPSS</a>
                    <a href="#"><i className="feather-layout"></i> UZAKTAN DGS</a>
                    <a href="#"><i className="feather-map"></i> UZAKTAN ALES</a>
                    <a href="#"><i className="feather-search"></i> UZAKTAN YDS</a>
                    <a href="#"><i className="feather-instagram"></i>KURS ONLINE</a>
                    <a href="#"><i className="feather-list"></i> KPSS B KURS</a>
                    <a href="#"><i className="feather-airplay"></i> KPSS KURSU</a>
                  </div>
                </div>
                {/* End Single Testimonial */}
              </div>
            </div>

            <div className="scroll-animation-wrapper mt--30">
              <div className="scroll-animation scroll-left-right">
                {/* Start Single Testimonial */}
                <div className="single-column-100">
                  <div className="rbt-categori-list">
                    <a href="#"><i className="feather-credit-card"></i> KPSS</a>
                    <a href="#"><i className="feather-folder"></i> ALES</a>
                    <a href="#"><i className="feather-heart"></i> DGS</a>
                    <a href="#"><i className="feather-link-2"></i> YDS</a>
                    <a href="#"><i className="feather-award"></i> ONLINE</a>
                    <a href="#"><i className="feather-layers"></i> KURS</a>
                    <a href="#"><i className="feather-log-in"></i> ONLINE KURS</a>
                    <a href="#"><i className="feather-hash"></i> UZAKTAN</a>
                    <a href="#"><i className="feather-grid"></i> UZAKTAN KURS</a>
                    <a href="#"><i className="feather-mail"></i> KPSS UZAKTAN</a>
                    <a href="#"><i className="feather-users"></i> DGS UZAKTAN</a>
                    <a href="#"><i className="feather-twitter"></i> ZOOM KPSS KURSU</a>
                    <a href="#"><i className="feather-image"></i> YDS ONLINE</a>
                    <a href="#"><i className="feather-dollar-sign"></i> ALES ONLINE</a>
                    <a href="#"><i className="feather-percent"></i> KPSS ONLINE</a>
                    <a href="#"><i className="feather-message-square"></i> UZAKTAN KPSS</a>
                    <a href="#"><i className="feather-layout"></i> UZAKTAN DGS</a>
                    <a href="#"><i className="feather-map"></i> UZAKTAN ALES</a>
                    <a href="#"><i className="feather-search"></i> UZAKTAN YDS</a>
                    <a href="#"><i className="feather-instagram"></i>KURS ONLINE</a>
                    <a href="#"><i className="feather-list"></i> KPSS B KURS</a>
                    <a href="#"><i className="feather-airplay"></i> KPSS KURSU</a>
                  </div>
                </div>
                {/* End Single Testimonial */}
              </div>
            </div>

            <div className="scroll-animation-wrapper mt--30">
              <div className="scroll-animation scroll-right-left">
                {/* Start Single Testimonial */}
                <div className="single-column-100">
                  <div className="rbt-categori-list">
                    <a href="#"><i className="feather-credit-card"></i> KPSS</a>
                    <a href="#"><i className="feather-folder"></i> ALES</a>
                    <a href="#"><i className="feather-heart"></i> DGS</a>
                    <a href="#"><i className="feather-link-2"></i> YDS</a>
                    <a href="#"><i className="feather-award"></i> ONLINE</a>
                    <a href="#"><i className="feather-layers"></i> KURS</a>
                    <a href="#"><i className="feather-log-in"></i> ONLINE KURS</a>
                    <a href="#"><i className="feather-hash"></i> UZAKTAN</a>
                    <a href="#"><i className="feather-grid"></i> UZAKTAN KURS</a>
                    <a href="#"><i className="feather-mail"></i> KPSS UZAKTAN</a>
                    <a href="#"><i className="feather-users"></i> DGS UZAKTAN</a>
                    <a href="#"><i className="feather-twitter"></i> ZOOM KPSS KURSU</a>
                    <a href="#"><i className="feather-image"></i> YDS ONLINE</a>
                    <a href="#"><i className="feather-dollar-sign"></i> ALES ONLINE</a>
                    <a href="#"><i className="feather-percent"></i> KPSS ONLINE</a>
                    <a href="#"><i className="feather-message-square"></i> UZAKTAN KPSS</a>
                    <a href="#"><i className="feather-layout"></i> UZAKTAN DGS</a>
                    <a href="#"><i className="feather-map"></i> UZAKTAN ALES</a>
                    <a href="#"><i className="feather-search"></i> UZAKTAN YDS</a>
                    <a href="#"><i className="feather-instagram"></i>KURS ONLINE</a>
                    <a href="#"><i className="feather-list"></i> KPSS B KURS</a>
                    <a href="#"><i className="feather-airplay"></i> KPSS KURSU</a>
                  </div>
                </div>
                {/* End Single Testimonial */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mt--30">
                <span className="rbt-title-style-2">Online Eğitimle Sınavlara Bir Adım Önde Başla</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Elements Presentation Area */}

      {/* Start Blog Presentation Area */}
      <div className="rbt-inner-page-layout-area bg-color-extra2 rbt-section-gap top-circle-shape-top top-circle-shape-top-left">
        <div className="wrapper position-relative overflow-hidden">
          <div className="rbt-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12 order-2 order-xl-1">
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
                </div>
              </div>
            </div>
            <div className="top-circle-shape"></div>
          </div>
        </div>
      </div>
      {/* End Blog Presentation Area */}

      {/* Start Campaign Area */}
      <div className="rbt-buy-now-area bg-gradient-8 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-buy-now-content text-center">
                <h2 className="title color-white">Başarı İçin Gereken Tek Şey: Doğru Eğitim</h2>
                <h4 className="subtitle color-white">ONLINE ☕ KPSS, DGS, ALES, YDS ⭐ Kursu ⚡</h4>

                <a className="rbt-btn btn-white radius hover-icon-reverse btn-xl" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">İletişim</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </span>
                </a>

                <span className="label-text color-white d-block text-uppercase">Sınavlara Hazır Ol, Hedefine Ulaş</span>
              </div>

              <div className="rbt-bebefit-list">
                <div className="single-bebefit">
                  <div className="icon">
                    <img src="assets/images/splash/icons/benefit-01.png" alt="Splash Images" />
                  </div>
                  <h6 className="title">Destek <br /> Hizmeti</h6>
                </div>
                <div className="single-bebefit">
                  <div className="icon">
                    <img src="assets/images/splash/icons/benefit-02.png" alt="Splash Images" />
                  </div>
                  <h6 className="title">WhatsApp Destek Grubu</h6>
                </div>
                <div className="single-bebefit">
                  <div className="icon">
                    <img src="assets/images/splash/icons/benefit-03.png" alt="Splash Images" />
                  </div>
                  <h6 className="title">Yüksek Verimlilik</h6>
                </div>
                <div className="single-bebefit">
                  <div className="icon">
                    <img src="assets/images/splash/icons/benefit-04.png" alt="Splash Images" />
                  </div>
                  <h6 className="title">En İyi Eğitmenler</h6>
                </div>
                <div className="single-bebefit">
                  <div className="icon">
                    <img src="assets/images/splash/icons/benefit-05.png" alt="Splash Images" />
                  </div>
                  <h6 className="title">Online ZOOM Üzerinden Canlı Ders</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-image">
          <img src="assets/images/splash/icons/map.png" alt="Map Image" />
        </div>
      </div>
      {/* End Campaign Area */}

      {/* Start Copyright Area */}
      <div className="copyright-area copyright-style-1 ptb--20 bg-color-darker">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p className="rbt-link-hover text-center color-white-off">developer freelancewebseo.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area */}

      <div className="rbt-progress-parent">
        <svg className="rbt-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default IndexPage;
