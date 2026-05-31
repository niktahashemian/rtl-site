// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/home/SimpleHeader';
import ImageGrid from './components/home/ImageGrid';
import SpecialProductsSection from './components/home/SpecialProductsSection';
import Banner from './components/home/Banner';
import TopDemos from './components/home/TopDemos';
import NewProductsSection from './components/home/NewProductsSection';
import CountdownTimer from './components/home/CountdownTimer';
import TrendingShopThemes from './components/home/TrendingShopThemes';
import LatestScripts from './components/home/LatestScripts';
import UpdatedProducts from './components/home/UpdatedProducts';
import CategoryBoxes from './components/home/CategoryBoxes';
import TopProducts from './components/home/TopProducts';
import InfoBoxes from './components/home/InfoBoxes';
import FeaturedDesignerWeek from './components/home/TopProductsCentered';
import LatestBlogPosts from './components/home/getResponsiveValue';
import TextParagraph from './components/home/TextMoreButton';
import ServiceItems from './components/home/ServiceItems';
// import FooterHeader from './components/home/FooterHeader';
import FooterBottom from './components/home/FootrBottom';
import Account from './components/account/account'; 
import ProductPage from './components/product/ProductPage';
import Modiriat from './components/modiriat/modiriat';
import GhalebPage from './components/ghaleb/ghalebPage';
import TagsosPage from './components/tagsos/tagsosPage';
import Maine  from "./components/tagsos/Maine.jsx";
import Maine2 from "./components/tagsos/Maine2.jsx";
import PoshtibaniPage from './components/poshtibani/poshtibaniPage.jsx';
import ForoshghahiPage from './components/foroshghahi/foroshghahiPage.jsx';
import AlphaPage from './components/alpha/alphaPage.jsx';

import './assets/css/style.css';
import Riazy from './components/riazy/riazy.jsx';

// صفحه اصلی
function HomePage() {
  return (
    <>
      <Header />
      <ImageGrid />
      <SpecialProductsSection />
      <Banner />
      <TopDemos />
      <NewProductsSection />
      <CountdownTimer />
      <TrendingShopThemes />
      <LatestScripts />
      <UpdatedProducts />
      <CategoryBoxes />
      <TopProducts />
      <InfoBoxes />
      <FeaturedDesignerWeek />
      <LatestBlogPosts />
      <TextParagraph />
      <ServiceItems />
      {/* <FooterHeader /> */}
      <FooterBottom />
    </>
  );
}

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/modiriat" element={<Modiriat />} />
        <Route path="/ghaleb" element={<GhalebPage />} />
        <Route path="/tagsos" element={<TagsosPage />} />
        <Route path="/" element={<Maine />} />
        <Route path="/maine2" element={<Maine2 />} />
        <Route path="/poshtibani" element={<PoshtibaniPage />} />
        <Route path="/foroshghahi" element={<ForoshghahiPage />} />
        <Route path='/riazy' element={<Riazy/>}/>
        <Route path='alpha' element={<AlphaPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
