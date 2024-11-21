import React from 'react';

const ZoomIndirmeLinkleri = () => {
    return (
        <div className="p-4 border rounded shadow-sm">
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Zoom İndirme Linkleri</h2>
            <div style={{ fontSize: '18px', lineHeight: '2' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'blue' }}>Mobil İçin</h3>
                <ul>
                    <li>
                        <a 
                            href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'blue', textDecoration: 'none' }}
                        >
                            Android için Zoom Uygulaması
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://apps.apple.com/us/app/zoom-one-platform-to-connect/id546505307" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'blue', textDecoration: 'none' }}
                        >
                            iOS için Zoom Uygulaması
                        </a>
                    </li>
                </ul>

                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'blue' }}>Web İçin</h3>
                <ul>
                    <li>
                        <a 
                            href="https://zoom.us/client/latest/ZoomInstaller.exe" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'blue', textDecoration: 'none' }}
                        >
                            Windows için Zoom Uygulaması
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://zoom.us/client/latest/Zoom.pkg" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: 'blue', textDecoration: 'none' }}
                        >
                            macOS için Zoom Uygulaması
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ZoomIndirmeLinkleri;
