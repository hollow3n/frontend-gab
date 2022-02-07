import './App.css';
import DemandeTransfert from './components/demandeTransfert';
import ReadTransfert from './components/readTransfert';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h1>GAB</h1>
        <div>
          <Route exact path='/' component={DemandeTransfert} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={ReadTransfert} />
        </div>
      </div>
    </Router>
  );
}

export default App;
