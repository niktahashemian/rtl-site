import HeroSection from './HeroSection';
import Maine2 from './main2';
import Maine from './maine';
import PoshtibaniHeader from './poshtibaniHeader';
// import ServicesCarousel from './ServicesCarousel';
import ServicesSlider from './ServicesSlider';
import SoraatSait from './soraatSait';
import BarresiPoshtibani from './barresiPoshtibani';
import Iranservices from './iranservices';
import Rahkar from './rahkar';
import Solutions from './Solutions';
import Keyfiat from './keyfiat';
import Nemoneproje from './nemoneproje';
import Pakage from './pakage';
import Soalat from './soalat';
import Faqcontainer from './faqcontainer';
import Pposhtibani from './pPoshtibani';
import FooterPoshtibani from './footerPoshtibani';


function PoshtibaniPage() {
    return (
        <div>
         <PoshtibaniHeader /> 
         <HeroSection />
         <Maine />
         <Maine2 />
         <SoraatSait />
         {/* <ServicesCarousel /> */}
         <ServicesSlider />
         <BarresiPoshtibani />
         <Iranservices />
         <Rahkar />
         <Solutions />
         <Keyfiat />
         <Nemoneproje />
         <Pakage />
         <Soalat />
         <Faqcontainer />
         <Pposhtibani />
         <FooterPoshtibani />
        </div>
    )
}
export default PoshtibaniPage;