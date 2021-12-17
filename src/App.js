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
import UserListPage from './Components/UserListPage/UserListPage'
import UserEditPage from './Components/UserEditPage/UserEditPage'
import VehicleListPage from './Components/VehicleListPage/VehicleListPage'
import VehicleEditPage from './Components/VehicleEditPage/VehicleEditPage'
import OrderListPage from './Components/OrderListPage/OrderListPage'
import ContactMeForm from './Components/ContactMeForm/ContactMeForm';
import AffiliateServices from './Components/ContactMeForm/AffiliateServices';

import { useState } from 'react'


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
           
            <Route path='/admin/userlist' component={UserListPage} />
            <Route path='/admin/user/:id/edit' component={UserEditPage} />

            <Route path='/admin/vehiclelist' component={VehicleListPage} />
            <Route path='/admin/vehicle/:id/edit' component={VehicleEditPage} />

            <Route path='/admin/orderlist' component={OrderListPage} />

            <Route path='/contactme' component={ContactMeForm} />
            <Route path='/affiliate' component={AffiliateServices} />

       </Container>
       </main>
      <Footer />
    </Router>
  );
}

export default App;
