import { Container } from 'react-bootstrap'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <Header/>
       <main className="py-3">
        <Container>
          <h1>
            Welcome to Downtown Autoplex!
          </h1>
        </Container>
       </main>
      <Footer />
    </div>
  );
}

export default App;
