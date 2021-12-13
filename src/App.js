import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import HomeScreen from './Components/HomeScreen/HomeScreen';
import VehiclePage from './Components/VehiclePage/VehiclePage';
import CartPage from './Components/CartPage/CartPage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import ShippingPage from './Components/ShippingPage/ShippingPage';
import PaymentPage from './Components/PaymentPage/PaymentPage';
import PlaceOrderPage from './Components/PlaceOrderPage/PlaceOrderPage';
import OrderPage from './Components/OrderPage/OrderPage'

function App() {
  return (

    <Router>
      <Header/>
       <main className="py-3">
       <Container>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/car:id' component={VehiclePage} />  
            <Route path='/cart:id?' component={CartPage} />  
            <Route path='/login' component={LoginPage} /> 
            <Route path='/register' component={RegisterPage} /> 
            <Route path='/profile' component={ProfilePage} />
            <Route path='/shipping' component={ShippingPage} />
            <Route path='/payment' component={PaymentPage} />
            <Route path='/placeorder' component={PlaceOrderPage} />
            <Route path='/order/:id' component={OrderPage} />

       </Container>
       </main>
      <Footer />
    </Router>
  );
}

export default App;
