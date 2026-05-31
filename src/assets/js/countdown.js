// src/assets/js/countdown.js

/**
 * محاسبه زمان باقی‌مانده
 * @param {string} targetDateStr - تاریخ مقصد
 * @returns {object} اشیاء شامل روز، ساعت، دقیقه، ثانیه
 */
export const calculateTimeLeft = (targetDateStr) => {
  const targetDate = new Date(targetDateStr);
  const now = new Date();
  const difference = targetDate - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

/**
 * فرمت‌دهی عدد (اضافه کردن صفر)
 */
export const formatNumber = (num) => {
  return num < 10 ? `0${num}` : num;
};
