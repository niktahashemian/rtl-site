import ComparePlans from "./comparePlans";
import HeaderGhaleb from "./headerGhaleb";
import HeroGhaleb from "./heroGhaleb";
import PargraphGhaleb from "./pargraphGhaleb";
import PlansSection from "./planCard";
import PGhaleb from "./pGhaleb";
import VideoPlayer from "./videoPlayer";
import MazayaGhhaleb from "./mazayaGhaleb";
import FeaturesSection from "./featuresSection";
import EmkanGhaleb from "./emkanGhaleb";
import ElementKitCards from "./elementKitCards";
import ContactUs from "./contactUs";
import Fag from "./faq";
import Footer from "./Footer";

function GhalebPage() {
    return (
        <div>
            <HeaderGhaleb />
            <HeroGhaleb />
            <ComparePlans />
            <PargraphGhaleb />
            <PlansSection />
            <PGhaleb />
            <VideoPlayer />
            <MazayaGhhaleb />
            <FeaturesSection />
            <EmkanGhaleb />
            <ElementKitCards />
            <ContactUs />
            <Fag />
            <Footer />
        </div>
    )
}
export default GhalebPage;