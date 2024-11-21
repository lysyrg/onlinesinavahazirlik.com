import React from "react";

const Dokumanlar = () => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px" }}>PDF Dökümanlar</h1>
      
      <ul style={{ fontSize: "20px", lineHeight: "2" }}>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "none", fontWeight: "bold" }}
          >
            YDS PDF Dökümanlar
          </a>
        </li>
        <ul style={{ marginLeft: "20px", fontSize: "18px" }}>
          <li>
            <a
              href="yds/ingilizcegrammer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Gramer Konu Anlatımı ve Dil Bilgisi Konu Testleri
            </a>
          </li>
          <li>
            <a
              href="yds/ingilizcekelime.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Kelime Bilgisi Kitabı
            </a>
          </li>
          <li>
            <a
              href="yds/ingilizceokuma.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              YDS Okuma Kitabı
            </a>
          </li>
          <li>
            <a
              href="yds/ingilizcesorubankasi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              İngilizce Soru Bankası Kitabı
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Dokumanlar;
