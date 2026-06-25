import '../../assets/css/style.css';

function PageHero() {
  return (
    <div className="page-header">
    <div className="container">
      <nav className="breadcrumbs" id="breadcrumbs">
        <ol>
          <li>
            <a href="https://www.rtl-theme.com">راست چین</a>
            <i className="rip rip-s-angle-left"></i>
          </li>
          <li>
            <a href="https://www.rtl-theme.com/tag/sos/">
              افزونه‌های کاربردی در شرایط اضطراری
            </a>
          </li>
        </ol>
      </nav>

      <div className="title">
        <span className="span ">27</span>
        <p className="term-title">
          افزونه‌های کاربردی در شرایط اضطراری
        </p>
      </div>
    </div>
  </div>
  )
}
export default PageHero;