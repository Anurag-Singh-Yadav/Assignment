import './App.css';
import RegistrationForm from './RegistrationForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App py-4">
      <Navbar/>
      <RegistrationForm/>
      <Footer/>
    </div>
  );
}

export default App;
