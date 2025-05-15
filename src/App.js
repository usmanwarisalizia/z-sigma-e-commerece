import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import {Switch, Route} from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Contactus from './Components/Contactus.jsx';
import Aboutus from './Components/Aboutus.jsx';
import Footer from './Components/Footer.jsx';



// Product main Yahaan path="/Products/:id" ka matlab hai ke URL ka :id part dynamic hoga.
function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} /> 
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/contact" component={Contactus} />
      <Route exact path="/about" component={Aboutus} />
      
       
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
