import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import HomeScreen from './Components/HomeScreen/HomeScreen';
import VehiclePage from './Components/VehiclePage/VehiclePage';
import CartPage from './Components/CartPage/CartPage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';


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
       </Container>
       </main>
      <Footer />
    </Router>
  );
}

export default App;
