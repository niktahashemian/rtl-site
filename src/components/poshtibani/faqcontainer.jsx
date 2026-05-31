import '../../assets/css/style.css';

function Faqcontainer() {
    return (
        <div>
            <div className='fag'>
                <div class="col-lg-6">
                    <div class="faq__header">
                        <a href="#faqContentWrapper" class="faq__header-item active" data-index="0">
                            <div class="faq__header-icon">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_918_407)"><path d="M8 4C8 4.48 7.68 4.8 7.2 4.8H0.8C0.32 4.8 0 4.48 0 4C0 3.52 0.32 3.2 0.8 3.2H7.2C7.68 3.2 8 3.52 8 4ZM4 0C4.48 0 4.8 0.32 4.8 0.8V7.2C4.8 7.68 4.48 8 4 8C3.52 8 3.2 7.68 3.2 7.2V0.8C3.2 0.32 3.52 0 4 0Z" fill="#30353D">
                                    </path></g>
                                    <defs>
                                        <clipPath id="clip0_918_407">
                                            <rect width="8" height="8" fill="white/"></rect>
                                        </clipPath></defs></svg></div>
                            <div class="faq__header-title"> قبل از انتخاب نهایی سرویس باید چیکار کنم ؟ </div></a>
                        <a href="#faqContentWrapper" class="faq__header-item" data-index="1">
                            <div class="faq__header-icon">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_918_407)"><path d="M8 4C8 4.48 7.68 4.8 7.2 4.8H0.8C0.32 4.8 0 4.48 0 4C0 3.52 0.32 3.2 0.8 3.2H7.2C7.68 3.2 8 3.52 8 4ZM4 0C4.48 0 4.8 0.32 4.8 0.8V7.2C4.8 7.68 4.48 8 4 8C3.52 8 3.2 7.68 3.2 7.2V0.8C3.2 0.32 3.52 0 4 0Z" fill="#30353D"></path></g><defs><clipPath id="clip0_918_407"><rect width="8" height="8" fill="white/">
                                    </rect></clipPath></defs></svg></div>
                            <div class="faq__header-title"> چطور مطمئن باشم سرویس انتخاب شده نیاز من را رفع می‌کند؟ </div></a><a href="#faqContentWrapper" class="faq__header-item" data-index="2">
                            <div class="faq__header-icon">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_918_407)"><path d="M8 4C8 4.48 7.68 4.8 7.2 4.8H0.8C0.32 4.8 0 4.48 0 4C0 3.52 0.32 3.2 0.8 3.2H7.2C7.68 3.2 8 3.52 8 4ZM4 0C4.48 0 4.8 0.32 4.8 0.8V7.2C4.8 7.68 4.48 8 4 8C3.52 8 3.2 7.68 3.2 7.2V0.8C3.2 0.32 3.52 0 4 0Z" fill="#30353D"></path></g><defs><clipPath id="clip0_918_407"><rect width="8" height="8" fill="white/"></rect></clipPath></defs></svg></div><div class="faq__header-title"> چرا سرویس های موجود دارای ظرفیت محدود هستند؟ </div></a>
                        <a href="#faqContentWrapper" class="faq__header-item" data-index="3">
                            <div class="faq__header-icon"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_918_407)">
                                <path d="M8 4C8 4.48 7.68 4.8 7.2 4.8H0.8C0.32 4.8 0 4.48 0 4C0 3.52 0.32 3.2 0.8 3.2H7.2C7.68 3.2 8 3.52 8 4ZM4 0C4.48 0 4.8 0.32 4.8 0.8V7.2C4.8 7.68 4.48 8 4 8C3.52 8 3.2 7.68 3.2 7.2V0.8C3.2 0.32 3.52 0 4 0Z" fill="#30353D">
                                </path>
                            </g><defs>
                                    <clipPath id="clip0_918_407"><rect width="8" height="8" fill="white/">
                                    </rect></clipPath></defs></svg></div>
                            <div class="faq__header-title"> امکان استرداد وجه وجود دارد؟ </div></a>
                        <a href="#faqContentWrapper" class="faq__header-item" data-index="4"><div class="faq__header-icon"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_918_407)"><path d="M8 4C8 4.48 7.68 4.8 7.2 4.8H0.8C0.32 4.8 0 4.48 0 4C0 3.52 0.32 3.2 0.8 3.2H7.2C7.68 3.2 8 3.52 8 4ZM4 0C4.48 0 4.8 0.32 4.8 0.8V7.2C4.8 7.68 4.48 8 4 8C3.52 8 3.2 7.68 3.2 7.2V0.8C3.2 0.32 3.52 0 4 0Z" fill="#30353D"></path></g><defs><clipPath id="clip0_918_407"><rect width="8" height="8" fill="white/"></rect></clipPath></defs></svg></div><div class="faq__header-title"> زمان تحویل پروژه چقدر خواهد بود؟ </div>
                        </a></div></div>

                <div className='FAg'>
                    <div className='Fag'>
                        <span><b>|</b></span>
                        <h6>قبل از انتخاب نهایی سرویس باید چیکار کنم ؟</h6>
                    </div>
                    <p>قبل از انتخاب نهایی سرویس لازم است همه مواردی که سمت کارفرما بوده اعم از بکاپ گیری از هاست و هاست/ اماده سازی تصاویر - دریافت مجوز ها و درگاه ها انجام شود تا در زمان تحویل پروژه دچار تاخیر نشوید . تاخیر ایجاد شده به خاطر عدم انجام این مورد بر عهده کارفرما میباشد و به زمان تحویل اضافه خواهد شد</p>
                </div>
            </div>
        </div>
    )
}
export default Faqcontainer