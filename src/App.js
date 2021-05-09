import './App.css';
import Body from './Body';
import Register from './components/Register.js';
import Login from './components/Login.js';
import Nav from './components/Nav.js';
import ParticleBackground from './components/Particle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <ParticleBackground />

            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Body} />
                    <Route path="/Register" exact component={Register} />
                    <Route path="/Login" exact component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
