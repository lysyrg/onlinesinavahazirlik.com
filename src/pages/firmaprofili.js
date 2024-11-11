import React from 'react';
import Header from '../components/inc_header';

const FirmProfilePage = () => {
  return (
    <div className="rbt-header-sticky">
      <Header /> {/* Header bileşenini çağırdık */}

      <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="inner pl--50 pl_sm--5">
                <div className="content text-start">
                  <span className="rbt-badge-6 bg-primary-opacity">Hakkımızda</span>
                  <h3 className="title">Online Sınava Hazırlık</h3>
                  <p className="description mt--30">
                    Onlinesinavahazirlik.com olarak, KPSS, DGS, ALES ve YDS sınavlarına hazırlık sürecinde öğrencilerimize en güncel ve etkili online eğitim hizmetlerini sunuyoruz. Eğitimde sınırları kaldıran, teknolojinin tüm imkanlarını kullanarak her öğrenciye ulaşmayı hedefleyen bir platformuz. Yeni bir oluşum olmanın getirdiği dinamizmle, sınavlara hazırlıkta en yenilikçi yöntemleri sunarak, öğrencilerimizin hedeflerine ulaşmalarına yardımcı olmayı amaçlıyoruz.
                  </p>
                  <p className="description">
                    <strong>Misyonumuz:</strong> Öğrencilerimizin sınav başarısına giden yolda, doğru kaynaklarla donatılmış online eğitimler sunmak ve her bir öğrencinin hedeflediği başarıya en verimli şekilde ulaşmasını sağlamak.
                  </p>
                  <p className="description">
                    <strong>Vizyonumuz:</strong> Online eğitimde lider bir platform olarak, KPSS, DGS, ALES ve YDS sınavlarına hazırlıkta kalıcı çözümler sunmak ve eğitimde fırsat eşitliği sağlayarak Türkiye genelindeki tüm öğrenciler için ulaşılabilir ve kaliteli eğitimler sunan bir yapı haline gelmek.
                  </p>
                  <p className="description">
                    Onlinesinavahazirlik.com olarak, profesyonel eğitmen kadromuzla ve sürekli güncellenen içeriklerimizle, öğrencilerimizin başarısına katkı sağlamak için buradayız. Başarıya giden yolda sizinle birlikte ilerliyoruz!
                  </p>
                  <div className="read-more-btn mt--40">
                    <a className="rbt-btn rbt-marquee-btn radius-round btn-gradient" href="iletisim">
                      <span data-text="Start Learning For Free">İletişim</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-banner-area rbt-banner-8 variation-02">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <div className="content">
                <div className="inner text-center">
                  <div className="rbt-new-badge rbt-new-badge-one">
                    <span className="rbt-new-badge-icon">🏆</span> Başarı için Online Sınava Hazırlık
                  </div>

                  <h1 className="title">Online Sınava Hazırlık
                    <span className="header-caption">
                      <span className="cd-headline clip is-full-width">
                        <span className="cd-words-wrapper">
                          <b className="is-visible theme-gradient">En iyi eğitmenler.</b>
                          <b className="is-hidden theme-gradient">En tecrübeli.</b>
                          <b className="is-hidden theme-gradient">En kaliteli.</b>
                        </span>
                      </span>
                    </span>
                  </h1>
                  <p className="description has-medium-font-size mt--20">
                    Başarıya Giden Yolda, En Doğru Adres Sınavlara Hazır Ol, Hedefine Ulaş. "Tamamen online derslerle, her seviyeye uygun eğitim içerikleri. İstediğiniz zaman, istediğiniz yerden sınavlara hazırlanın."
                  </p>
                  <div className="slider-btn rbt-button-group justify-content-center">
                    <a className="rbt-btn btn-gradient hover-icon-reverse" href="kurskayit">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Kursa Kayıt Ol</span>
                      </span>
                    </a>
                    <a className="rbt-btn hover-icon-reverse btn-white" href="iletisim">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">İletişim</span>
                      </span>
                    </a>
                  </div>
                </div>
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

export default FirmProfilePage;
