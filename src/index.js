import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WOW from 'wowjs'; // استيراد مكتبة wow.js

// إنشاء الجذر للتطبيق
const root = ReactDOM.createRoot(document.getElementById('root'));

// تفعيل مكتبة wow.js بعد تحميل التطبيق
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

new WOW.WOW().init(); // تفعيل wow.js

// إذا كنت ترغب في بدء قياس الأداء في تطبيقك، مرر دالة
// لتسجيل النتائج (على سبيل المثال: reportWebVitals(console.log))
// أو أرسل إلى نقطة تحليلية. تعلم المزيد: https://bit.ly/CRA-vitals
reportWebVitals();
