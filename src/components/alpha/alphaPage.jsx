import Header from "./Header"
import HeroSection from "./HeroSection"
import ProductsGrid from './productsGrid';
import { sampleProducts } from '../../assets/js/products';
import SimpleSectionTitle from "./SimpleSectionTitle";
import ServicesSection from "./servicesSection";
import ProIconItems from './ProIconItems';
import { proIconItems } from '../../assets/js/proIconItems';

function AlphaPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <ProductsGrid
                products={sampleProducts}
                title="دوره‌های تخصصی"
                viewAllLink="https://mjkhajeh.ir/alfapress/shop"
                columns={4}
            />
            
            
            <div className="services-section">
                <SimpleSectionTitle
                    title="خدمات ویژه برای رشد کسب‌وکار شما"
                    align="center"
                />

                <ProIconItems
                    items={proIconItems}
                    columns={4}
                    showDivider={true}
                />
            </div>
        </div>
    )
}
export default AlphaPage