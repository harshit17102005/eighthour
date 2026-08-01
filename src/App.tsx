import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchOverlay from './components/SearchOverlay';
import MobileMenu from './components/MobileMenu';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import OurHouse from './pages/OurHouse';
import Craft from './pages/Craft';
import Collections from './pages/Collections';
import StaticPage from './pages/StaticPage';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative min-h-screen flex flex-col bg-primary text-ink font-sans selection:bg-ink selection:text-primary">
      <Navbar />
      <CartDrawer />
      <SearchOverlay />
      <MobileMenu />

      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/house" element={<OurHouse />} />
          <Route path="/craft" element={<Craft />} />
          <Route path="/contact" element={<StaticPage title="Contact" />} />
          <Route path="/shipping" element={<StaticPage title="Shipping & Returns" />} />
          <Route path="/privacy" element={<StaticPage title="Privacy Policy" />} />
          <Route path="/terms" element={<StaticPage title="Terms & Conditions" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
