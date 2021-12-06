import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import HomeScreen from './Components/HomeScreen/HomeScreen';
import VehiclePage from './Components/VehiclePage/VehiclePage';


function App() {
  return (

    <BrowserRouter>
      <Header/>
       <main className="py-3">
       <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/car:_id" element={<VehiclePage />} exact />
          </Routes>
       </Container>

       </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
