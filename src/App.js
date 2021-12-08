import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import HomeScreen from './Components/HomeScreen/HomeScreen';
import VehiclePage from './Components/VehiclePage/VehiclePage';
import CartPage from './Components/CartPage/CartPage';


function App() {
  return (

    <BrowserRouter>
      <Header/>
       <main className="py-3">
       <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/car:id" element={<VehiclePage />} />  
            <Route path="/Cart:id?" element={<CartPage />} />  
          </Routes>
       </Container>

       </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
