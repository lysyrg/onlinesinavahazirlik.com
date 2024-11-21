import React from "react";

const KursUcretiOdeme = () => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px" }}>
        YDS Kurs Ücreti Ödeme (3.500 TL)
      </h1>

      <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
        Kurs ücreti ödemenizi kredi kartı veya banka havalesi ile yapabilirsiniz. 
        Herhangi bir sorunuz olursa, bizimle iletişime geçmekten çekinmeyin. Başarılar dileriz!
      </p>

      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px" }}>
        Ödeme Linki:
      </h2>
      <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
        Kredi kartı ile ödeme yapmak için aşağıdaki linke tıklayın:
      </p>
      <a
        href="https://www.paytr.com/link/T0F2Hte"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Ödeme Yap
      </a>

      <h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "30px" }}>
        Banka Havalesi ile Ödeme:
      </h2>
      <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
        Kredi kartı dışında banka havalesi ile ödeme yapmak isteyenler, aşağıdaki 
        banka hesabına kurs ücretini havale yapabilirler. Havale yapıldıktan sonra lütfen makbuzu 
        bizimle paylaşın.
      </p>

      <ul style={{ fontSize: "20px", lineHeight: "2", marginLeft: "20px" }}>
        <li><strong>Banka Adı:</strong> İş Bankası</li>
        <li><strong>Ad Soyad:</strong> Gürdal Kurt</li>
        <li><strong>IBAN:</strong> TR600006400000142130793029</li>
        <li>
          <strong>Açıklama:</strong> Lütfen açıklama kısmına adınızı, soyadınızı ve telefon numaranızı ekleyin.
        </li>
      </ul>

      <p style={{ fontSize: "20px", lineHeight: "1.6", marginTop: "20px" }}>
        Dekontu WhatsApp iletişim numaramız ile paylaşın.
      </p>

      <p style={{ fontSize: "20px", fontWeight: "bold", color: "green", marginTop: "30px" }}>
        Teşekkür ederiz ve başarılar dileriz!
      </p>
    </div>
  );
};

export default KursUcretiOdeme;
