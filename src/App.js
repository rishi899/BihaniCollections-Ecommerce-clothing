import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import { Homepage } from './customers/components/Pages/Homepage/Homepage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';

import ProductDetails from './customers/components/ProductDetails/ProductDetails';
import Cart from './customers/components/Cart/Cart';
import Checkout from './customers/components/Checkout/Checkout';


function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
       {/*<Homepage/>*/} 
       {/*<Product/>*/}
      
       {/*<ProductDetails/>*/}
       {/*<Cart/>*/}
       <Checkout/>
      </div>
      <div>
         {<Footer/>}
      </div>
    
        
      
    </div>
  );
}

export default App;
