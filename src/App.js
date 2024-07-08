import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import { Homepage } from './customers/Pages/Homepage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';

import ProductDetails from './customers/components/ProductDetails/ProductDetails';
import Cart from './customers/components/Cart/Cart';
import Checkout from './customers/components/Checkout/Checkout';
import Order from './customers/components/Order/Order';
import OrderDetails from './customers/components/Order/OrderDetails';
import { Routes,Route} from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<CustomerRouters/>}></Route>
      </Routes>
      
      <div>
       
      </div>
      
    
        
      
    </div>
  );
}

export default App;
