import logo from './Header.png';
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PortfolioContainer/>
      </header>
    </div>
  );
}

export default App;
