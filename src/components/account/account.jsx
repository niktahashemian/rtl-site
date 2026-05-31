import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import { House } from 'lucide-react';


function Account() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // پاک کردن خطای مربوطه وقتی کاربر شروع به تایپ می‌کند
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'نام و نام خانوادگی الزامی است';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'ایمیل معتبر نیست';
    }
    
    if (!formData.password) {
      newErrors.password = 'رمز عبور الزامی است';
    } else if (formData.password.length < 6) {
      newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'رمز عبور و تکرار آن مطابقت ندارند';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isLogin) {
      console.log('ورود با:', formData.email, formData.password);
      // اینجا می‌توانید API لاگین را فراخوانی کنید
      // پس از موفقیت، کاربر را به صفحه اصلی هدایت کنید
      navigate('/');
    } else {
      console.log('ثبت‌نام با:', formData);
      // اینجا می‌توانید API ثبت‌نام را فراخوانی کنید
      // پس از موفقیت، کاربر را به صفحه ورود هدایت کنید یا مستقیم وارد کنید
      setIsLogin(true);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };
  const App = () => {
  return (
    <House />
  );
};

  return (
    <div className="account-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{isLogin ? 'ورود به حساب' : 'ایجاد حساب جدید'}</h1>
          <p>{isLogin ? 'خوش برگشتی!' : 'به جمع ما بپیوند'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            
            <div className="input-group">
              
              <label>نام و نام خانوادگی</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="مثال: علی محمدی"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
          )}

          <div className="input-group">
            <label>ایمیل</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label>رمز عبور</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>تکرار رمز عبور</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          )}

          {isLogin && (
            <div className="forgot-password">
              <a href="#">رمز عبور را فراموش کرده‌اید؟</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'ورود' : 'ثبت‌نام'}
          </button>
          <button>
          <House></House>
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? 'حساب کاربری ندارید؟' : 'قبلاً ثبت‌نام کرده‌اید؟'}
            <button onClick={toggleMode} className="toggle-btn">
              {isLogin ? 'ثبت‌نام' : 'ورود'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;