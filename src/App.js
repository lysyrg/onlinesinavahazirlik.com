import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesktopHeader from './components/DesktopHeader'; // Masaüstü menü
import MobileHeader from './components/MobileHeader'; // Mobil menü
import LoginRegisterPage from './components/LoginRegisterPage';
import Register from './components/Register';
import KursiyerKursu from './pages/kursiyer-kursu';
import IndexPage from './pages/index';
import FirmProfilePage from './pages/firmaprofili';
import OnlineKPSSKursu from './pages/online-kpss-kursu';
import OnlineAlesKursu from './pages/online-ales-kursu';
import OnlineAlesMatematikKursu from './pages/online-ales-matematik-kursu';
import OnlineAlesTurkceKursu from './pages/online-ales-turkce-kursu';
import OnlineDGSKursu from './pages/online-dgs-kursu';
import OnlineDGSMatematikKursu from './pages/online-dgs-matematik-kursu';
import OnlineDGSTurkceKursu from './pages/online-dgs-turkce-kursu';
import OnlineKPSSCografyaKursu from './pages/online-kpss-cografya-kursu';
import OnlineKPSSMatematikKursu from './pages/online-kpss-matematik-kursu';
import OnlineKPSSTarihKursu from './pages/online-kpss-tarih-kursu';
import OnlineKPSSTurkceKursu from './pages/online-kpss-turkce-kursu';
import OnlineKPSSVatandaslikKursu from './pages/online-kpss-vatandaslik-kursu';
import OnlineYDSKursu from './pages/online-yds-kursu';
import Kursiyerprofili from './pages/kursiyel-profili';
import TanitimVideolari from './pages/tanitim-videolari';
import IletisimBilgileri from './pages/iletisim';
import './style.css';

function App() {
  return (
    <Router>
      <div>
        {/* Ekran genişliğine göre masaüstü veya mobil menü */}
        <div className="d-none d-xl-block">
          <DesktopHeader />
        </div>
        <div className="d-block d-xl-none">
          <MobileHeader />
        </div>

        {/* Sayfa içerikleri */}
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kursiyer-kursu" element={<KursiyerKursu />} />
          <Route path="/firma-profili" element={<FirmProfilePage />} />
          <Route path="/online-kpss-kursu" element={<OnlineKPSSKursu />} />
          <Route path="/online-ales-kursu" element={<OnlineAlesKursu />} />
          <Route path="/online-ales-matematik-kursu" element={<OnlineAlesMatematikKursu />} />
          <Route path="/online-ales-turkce-kursu" element={<OnlineAlesTurkceKursu />} />
          <Route path="/online-dgs-kursu" element={<OnlineDGSKursu />} />
          <Route path="/online-dgs-matematik-kursu" element={<OnlineDGSMatematikKursu />} />
          <Route path="/online-dgs-turkce-kursu" element={<OnlineDGSTurkceKursu />} />
          <Route path="/online-kpss-cografya-kursu" element={<OnlineKPSSCografyaKursu />} />
          <Route path="/online-kpss-matematik-kursu" element={<OnlineKPSSMatematikKursu />} />
          <Route path="/online-kpss-tarih-kursu" element={<OnlineKPSSTarihKursu />} />
          <Route path="/online-kpss-turkce-kursu" element={<OnlineKPSSTurkceKursu />} />
          <Route path="/online-kpss-vatandaslik-kursu" element={<OnlineKPSSVatandaslikKursu />} />
          <Route path="/online-yds-kursu" element={<OnlineYDSKursu />} />
          <Route path="/kursiyel-profili" element={<Kursiyerprofili />} />
          <Route path="/tanitim-videolari" element={<TanitimVideolari />} />
          <Route path="/iletisim" element={<IletisimBilgileri />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
