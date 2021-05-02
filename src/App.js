import './App.css';
import Register from './components/Register';
import Nav from './components/Nav';
import ParticleBackground from './components/Particle';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Nav />
      <Register />
    </div>
  );
}

export default App;
