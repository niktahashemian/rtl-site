
import { useParams, Link } from "react-router-dom";

const products = [
    {
        id: 303842,
        title: "راهکار | افزونه هوشمند پنل کاربری و مدیریت فروشگاه اینترنتی",
        usage: "افزونه همه کاره‌ی حرفه‌ای",
        price: 1198000,
        originalPrice: null,
        discount: null,
        image: "https://media.rtlcdn.com/2026/04/1f6571067724a5e7c276800147d5dd2b1a27f6837f3c14-1050x520.jpg",
        sales: 84,
        satisfaction: 100,
        support: "-",
        category: "افزونه وردپرس",
        link: "https://www.rtl-theme.com/rahkar-wordpress-plugin/",
        previewLink: "https://rtlr.ir/303842",
    },
    {
        id: 303707,
        title: 'آلفا پرس | قالب آموزشی و فروش دوره',
        usage: 'قالب آموزشی',
        price: 1498000,
        originalPrice: null,
        discount: null,
        image: 'https://media.rtlcdn.com/2026/01/986675c571af18178dff5f4341f21660914a7ee83c6120-337x171.jpg',
        sales: 51,
        satisfaction: 86,
        support: 'A+',
        category: 'قالب وردپرس',
        link: 'https://www.rtl-theme.com/alfapress-wordpress-theme/',
        previewLink: 'https://rtlr.ir/303707'
    },
    {
        id: 303039,
        title: 'پُرس‌ یار – افزونه چت‌ بات هوش مصنوعی',
        usage: 'افزونه چت چندزبانه با هوش مصنوعی',
        price: 848000,
        originalPrice: null,
        discount: null,
        image: 'https://media.rtlcdn.com/2026/01/d632487c388c1705ed6d1f5046873690850d47d6f45e07-337x171.jpg',
        sales: 60,
        satisfaction: 98,
        support: 'A',
        category: 'افزونه وردپرس',
        link: 'https://www.rtl-theme.com/porsyar-wordpress-plugin/',
        previewLink: 'https://rtlr.ir/303039'
    },
    {
        id: 302687,
        title: 'آی ترب | افزونه اتصال وردپرس به سایت ترب',
        usage: 'افزونه اتصال به ترب',
        price: 848000,
        originalPrice: null,
        discount: null,
        image: 'https://media.rtlcdn.com/2025/12/210f6c067797370b47eebd2c2991011979104f29585e65-337x171.jpg',
        sales: 93,
        satisfaction: 88,
        support: 'A+',
        category: 'افزونه وردپرس',
        link: 'https://www.rtl-theme.com/itorob-wordpress-plugin/',
        previewLink: 'https://rtlr.ir/302687'
    },
    {
        id: 301420,
        title: 'فرا پنل، افزونه پنل کاربری مدرن و حرفه‌ ای',
        usage: 'پنل کاربری حرفه‌ای همراه باشگاه مشتریان',
        price: 1198000,
        originalPrice: null,
        discount: null,
        image: 'https://media.rtlcdn.com/2025/12/71f95d03105850129744d04b252541dd1a8c799726746e-337x171.jpg',
        sales: 71,
        satisfaction: 96,
        support: 'A+',
        category: 'افزونه وردپرس',
        link: 'https://www.rtl-theme.com/fara-panel-wordpress-plugin/',
        previewLink: 'https://rtlr.ir/301420'
    },
    {
        id: 301175,
        title: 'لمکده، قالب فروشگاهی مبلمان و دکوراسیون',
        usage: 'قالب معماری و دکوراسیون داخلی',
        price: 750500,
        originalPrice: 998000,
        discount: 24,
        image: 'https://media.rtlcdn.com/2025/12/734c0655124bf8a06c11c946fb6876fdf47bfd45335f3f-337x171.jpg',
        sales: 48,
        satisfaction: 100,
        support: 'A+',
        category: 'قالب وردپرس',
        link: 'https://www.rtl-theme.com/lamkadeh-wordpress-theme/',
        previewLink: 'https://rtlr.ir/301175'
    },
    {
        id: 302201,
        title: 'اکانتک، قالب فروش اکانت',
        usage: 'قالب فروشگاهی وردپرس',
        price: 1048000,
        originalPrice: null,
        discount: null,
        image: 'https://media.rtlcdn.com/2025/12/d1548510b37f8c671e7325d51bda88a2e676492c542283-337x171.jpg',
        sales: 33,
        satisfaction: 70,
        support: 'A',
        category: 'قالب وردپرس',
        link: 'https://www.rtl-theme.com/accountech-wordpress-theme/',
        previewLink: 'https://rtlr.ir/302201'
    },
    {
        id: 301470,
        title: 'آنالیز یار، افزونه رصد رفتار کاربران در سایت',
        usage: 'افزونه مارکتینگ',
        price: 598000,
        originalPrice: null,
        discount: null,
        image: 'https://media.rtlcdn.com/2025/12/1d00cad1af99b811f615847dd5cff0a589343f6a93d786-337x171.jpg',
        sales: 33,
        satisfaction: 100,
        support: 'A',
        category: 'افزونه وردپرس',
        link: 'https://www.rtl-theme.com/analizyar-wordpress-plugin/',
        previewLink: 'https://rtlr.ir/301470'
    }
];


const ProductPage = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return <div style={{ padding: "40px", textAlign: "center" }}>محصول پیدا نشد</div>;
    }

    return (
        <div style={{ direction: "rtl", padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
            {/* مسیر ناوبری */}
            <div style={{ marginBottom: "20px", fontSize: "14px" }}>
                <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>خانه</Link> /
                <Link to={`/category/${product.category}`} style={{ textDecoration: "none", color: "#007bff", margin: "0 5px" }}>
                    {product.category}
                </Link> /
                <span style={{ marginRight: "5px" }}>{product.title}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
                {/* ستون تصویر */}
                <div style={{ position: "relative" }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/337x171?text=No+Image';
                        }}
                    />
                    {product.discount && (
                        <div style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background: "#dc3545",
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            fontWeight: "bold"
                        }}>
                            {product.discount}% تخفیف
                        </div>
                    )}
                </div>

                {/* ستون اطلاعات */}
                <div>
                    <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{product.title}</h1>
                    <p style={{ color: "#666", marginBottom: "15px" }}>{product.usage}</p>

                    <div style={{ margin: "15px 0", display: "flex", gap: "15px" }}>
                        <span>🔥 {product.sales} فروش</span>
                        <span>⭐ {product.satisfaction}% رضایت</span>
                        {product.support && <span>📞 پشتیبانی {product.support}</span>}
                    </div>

                    {product.originalPrice && (
                        <div style={{ color: "#999", textDecoration: "line-through", fontSize: "16px" }}>
                            {product.originalPrice.toLocaleString()} تومان
                        </div>
                    )}

                    <div style={{ fontSize: "28px", color: "#28a745", marginBottom: "20px" }}>
                        {product.price.toLocaleString()} <span style={{ fontSize: "16px" }}>تومان</span>
                    </div>

                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <a
                            href={product.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: "#28a745",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "6px",
                                textDecoration: "none",
                                display: "inline-block",
                            }}
                        >
                            مشاهده در راست‌چین
                        </a>

                        <a
                            href={product.previewLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: "#f8f9fa",
                                padding: "10px 20px",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "#333",
                                border: "1px solid #ddd",
                            }}
                        >
                            🖥️ پیش‌نمایش
                        </a>

                        <button
                            style={{
                                background: "#007bff",
                                color: "#fff",
                                padding: "10px 20px",
                                borderRadius: "6px",
                                border: "none",
                                cursor: "pointer",
                            }}
                            onClick={() => alert('محصول به سبد خرید اضافه شد')}
                        >
                            خرید و دانلود
                        </button>
                    </div>
                </div>
            </div>
            <p className="pProduct">
                افزونه افزایش سرعت سایت با اینترنت ملی | افزونه بهینه ساز و افزایش سرعت | مدیریت درخواست‌های خارجی در زمان قطعی اینترنت
            </p>
            <h1 className="h1Product">معرفی افزونه ناجی</h1>
            <p className="p2Product">
                ناجی یک افزونه بهینه سازی وردپرس با تمرکز بر روی مدیریت درخواست‌های خارجی می‌باشد که به شما کمک می کند در شرایط اینترنت محدود (ملی) و همچنین در شرایط اینترنت عادی سرعت سایت خود را نه تنها حفظ کنید بلکه سرعت آن را نیز افزایش دهید. با مدیریت درخواست‌های خارجی می‌توانید وابستگی سایت خود را به سایت‌های خارجی حذف و با ارائه فایل‌ها از روی هاست و سرور خود به لود فایل‌ها سرعت ببخشید.
            </p>
            <p className="p3Product">
اگر سایتتان ب خاطر  لود شدن فونت‌های گوگل، فایل‌های JS از CDN های خارجی و درخواست‌های مکرر API کُند شده است، با افزونه بهینه ساز ناجی می‌توانید وابستگی سایت خود را به سرورهای خارجی قطع و سرعت سایتتان را به زیر 1 ثانیه برسانید.            </p>
<h4 className="h2Product">
    ناجی؛ مدیریت هوشمند و بومی‌سازی درخواست‌های خارجی وردپرس
</h4>
<img className="imegProduct" src="https://content-media.rtlcdn.com/post-305633/deec7f596b0517274591607df8ec2199f8bc15cea7f816.jpg" alt="" />
<p className="p3Product">ویژگی‌ها و امکانات افزونه ناجی</p>
<h1 className="h1Product">1. بهینه سازی هوشمند</h1>
<p className="p4Product">افزونه ناجی یک افزونه تک کلیکی است. تنها با فعال کردن افزونه معجزه اتفاق می افتد. تمامی موارد بهینه سازی به صورت خودکار روی سایت شما اعمال می شود و درخواست های خروجی وردپرس، ووکامرس، المنتور، فونت های گوگل و … به صورت خودکار مسدود می شود. همچنین تعداد زیادی تابع بهینه سازی وردپرس در افزونه قرار داده شده که سایت شما را بسیار چابک تر می کند.</p>
<h1 className="h1Product">2. مسدود سازی سراسری درخواست ها</h1>
<p className="p4Product">با فعال کردن یک گزینه می توانید تمامی درخواست های خروجی از سایت خود را غیر فعال کنید. در کنار این گزینه، شما امکان ایجاد لیست سفید (White List) را هم دارید تا برای برخی از درخواست ها استثنا قائل شوید.</p>
<h1 className="h1Product">3. مسدود سازی درخواست های غیر ضروری به صورت انتخابی</h1>
<p className="p4Product">لیست تمامی درخواست های سایت شما در یک جدول به صورت دسته بندی شده به شما نمایش داده خواهد شد. برخی از درخواست های موجود در وردپرس غیر ضروری هستند و می توانید به انتخاب خود این درخواست ها را با فشردن یک دکمه مسدود کنید. این ویژگی این امکان را به شما می دهد تا در هر شرایطی سایتی با سرعت بیشتر داشته باشید.</p>
<h1 className="h1Product">4. بومی سازی و میزبانی محلی فایل ها (Self-Host)</h1>
<p className="p4Product">بسیاری از افزونه‌ها فایل‌های مهم خود (مانند FontAwesome، Bootstrap، jQuery و…) را از CDN های خارجی فراخوانی می‌کنند. ناجی تمامی آدرس‌های منتهی به فایل‌های .js و .css خارجی را اسکن کرده، آن‌ها را بر روی سرور شما کش (Cache) می‌کند و URLها را در کدهای HTML سایت به آدرس دامنه شما تغییر می‌دهد. نتیجه؟ کاهش وابستگی به شبکه‌های خارجی به میزان 100%.</p>
<h1 className="h1Product">5. کاوش و لاگ‌گیری دقیق درخواست‌ها (Request Logging)</h1>
<p className="p4Product">با توجه به شرایط خاص شبکه‌ای در ایران، گاهی اوقات دسترسی به دیتاسنترهای بین‌المللی قطع شده یا با کندی شدید همراه می‌شود. اگر سایت شما به فایل‌های CSS یا JS خارجی وابسته باشد، در این شرایط ظاهر سایت کاملاً به هم می‌ریزد. با فعال بودن افزونه ناجی و محلی‌سازی (Self-hosting) تمامی منابع، سایت شما حتی در بستر اینترنت داخلی نیز بدون کوچکترین نقص و افت سرعتی برای کاربران بارگذاری خواهد شد.</p>
<h1 className="h1Product">7. کاهش چشمگیر DNS Lookups</h1>
<p className="p4Product">با انتقال تمامی منابع به دامنه اصلی سایت، مرورگر کاربر فقط نیاز به ترجمه یک دامنه (دامنه شما) دارد. طبق معادلات بهینه‌سازی وب، کاهش درخواست‌های DNS باعث می‌شود زمان اتصال اولیه یا همان (Time to First Byte) تا حد چشمگیری به عدد 0 میلی‌ثانیه برای منابع استاتیک نزدیک شود.</p>
<h1 className="h1Product">8. بهینه‌سازی گراواتار (Gravatar Optimization)</h1>
<p className="p4Product">لود شدن تصاویر پروفایل کاربران در بخش نظرات از سرورهای gravatar.com یکی از دلایل اصلی کندی سایت است. افزونه ناجی امکان غیرفعال کردن gravatar را به شما می دهد تا سایت شما با سرعت برق آسا بارگذاری شود.</p>
<h1 className="h1Product">9. مدیریت فونت های گوگل</h1>
<p className="p4Product">قالب‌های استاندارد معمولاً فونت‌ها را مستقیماً از سرورهای گوگل فراخوانی می‌کنند. افزونه ناجی به صورت خودکار درخواست‌های ارسالی فونت های گوگل را شناسایی می کند. شما می توانید فونت‌ها را در پس‌زمینه دانلود کنید و از این پس، آن‌ها را از روی سرور سایت شما با سرعت بالا و بدون نیاز به دور زدن تحریم‌ها لود کنید یا آن ها را به صورت کامل بلاک کنید. این کار امتیاز Core Web Vitals شما را به شدت بهبود می بخشد.</p>
<br />
<img className="imgProduct" src="https://content-media.rtlcdn.com/post-305633/0f27335f20829773f3519256e63b7bd479147130c1f156.png" alt="" />

        </div>
    );
};

export default ProductPage;