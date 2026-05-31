// مثال استفاده
import SimpleSectionTitle from "./SimpleSectionTitle";

function ServicesSection() {
  return (
    <div className="services-section">
      {/* ساده و پیش‌فرض (وسط‌چین) */}
      <SimpleSectionTitle 
        title="خدمات ویژه برای رشد کسب‌وکار شما"
        align="right"
      />
    </div>
  );
}

export default ServicesSection;