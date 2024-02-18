import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from '../src/components/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import CheckoutForm from './components/Form'; 
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/checkout" element={<CheckoutForm/>} /> 
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;