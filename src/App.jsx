import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from '../src/components/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import CheckoutForm from './components/Form'; 
import Footer from './components/Footer';
import OrderPage from './components/Orderid';
import OrderDetails from './components/OrderDetails';

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
          <Route path="/order/:orderId" element={<OrderPage />} />
          <Route path="/order/:orderId/details" element={<OrderDetails />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;