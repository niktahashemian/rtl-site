import { Link } from "react-router-dom";
import '../../assets/css/style.css';

const SpecialMain = () => {


    // تشخیص حالت موبایل


    return (
        <div className="special-header">
            <div className="special-header-right">
                <span className="special-header-icon">🔥</span>
                <h3 className="special-header-title">آخرین پاسخ و پرسش</h3>
                <Link to="/products/special" className="special-view-all-btn">
                    مشاهده همه
                </Link>
            </div>
            

        </div>
    );
};

export default SpecialMain;
