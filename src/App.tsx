import Navbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";



function App() {

  return (
    <>
     <BrowserRouter>
       <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias/>} />
              <Route path="/cadastrarcategorias" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            </Routes>
          </div>
          <Footer />          
        </BrowserRouter>     
    </>

  )
}

export default App
