import React from "react";
import Header from "../home/SimpleHeader";
import ProductPage from "./products";
import SpecialMain from "./SpecialMain";
import Footer from "./footer";
import HotProducts from "./HotProducts";
import ProductCards from "./productcards";
import ProductDetails from "./ProductDetails";
import AttributeTable from "./attributeTable";
import ServiceItems from "./serviceItem";
// import ProductCard from "./ProductCard";

const PageHeader = () => {
  return (
    <div className="page-header">
      <Header />
      <div className="container">
        <div className="row align-items-end justify-content-center mb-xl-4 mb-sm-1">
          <div className="page-header__breadcrumb">
            <nav className="breadcrumbs" id="breadcrumbs">
              <ol>
                <li>
                  <a href="https://www.rtl-theme.com">راست چین</a>
                  <i className="rip rip-s-angle-left"></i>
                </li>
                <li>
                  <a href="https://www.rtl-theme.com/category/wordpress-plugin/">
                    افزونه وردپرس
                  </a>
                  <i className="rip rip-s-angle-left"></i>
                </li>
                <li>
                  <a href="https://www.rtl-theme.com/category/wordpress-plugin/optimizer-plugin/">
                    افزونه بهینه‌سازی
                  </a>
                </li>
              </ol>
            </nav>
            <span className="versionProduct">
              <a
                href="javascript:void(0);"
                data-toggle="modal"
                data-target="#changelogModal"
              >
                نسخه 1.0.0
              </a>
            </span>
          </div>
        </div>
        <ProductPage />
        {/* <SpecialMain /> */}
        <HotProducts />
        <ProductCards/>
        <ProductDetails />
        <AttributeTable />
        <ServiceItems />
        {/* <ProductCard /> */}
        <Footer />
      </div>
    </div>
  );
};

export default PageHeader;
