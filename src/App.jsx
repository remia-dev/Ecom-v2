import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer'

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
