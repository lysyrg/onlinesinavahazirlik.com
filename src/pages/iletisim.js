import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini içe aktarıyoruz



const IletisimBilgileri = () => {
    return (
        <div>
           

            <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--60">
                                <span className="subtitle bg-secondary-opacity">İletişim Bilgileri</span>
                                <h2 className="title">ONLINE <br /> Sınava Hazırlık</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                            <div className="rbt-address">
                                <div className="icon">
                                    <i className="feather-headphones"></i>
                                </div>
                                <div className="inner">
                                    <h4 className="title">Telefon Numarası</h4>
                                    <p><a href="tel:+222222222333">0553 027 9146</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="200" data-sal-duration="800">
                            <div className="rbt-address">
                                <div className="icon">
                                    <i className="feather-mail"></i>
                                </div>
                                <div className="inner">
                                    <h4 className="title">E-Posta</h4>
                                    <p><a href="mailto:admin@gmail.com">onlinesinavahazirlik@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="250" data-sal-duration="800">
                            <div className="rbt-address">
                                <div className="icon">
                                    <i className="feather-map-pin"></i>
                                </div>
                                <div className="inner">
                                    <h4 className="title">Adres</h4>
                                    <p>Meşrutiyet Cad. No : 2/198 Kat : 9<br />Kök İşhanı <br />Kızılay/ANKARA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-google-map bg-color-white rbt-section-gapTop">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48961.1762421079!2d32.854597!3d39.917371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34faa1bd62bfd%3A0xb2da7a6e15a009b1!2sGaranti%20Akademi%20%7C%20KPSS%2C%20DGS%2C%20ALES%2C%20YDS%20Kursu!5e0!3m2!1str!2str!4v1729245612815!5m2!1str!2str"
                        width="1200" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default IletisimBilgileri;
