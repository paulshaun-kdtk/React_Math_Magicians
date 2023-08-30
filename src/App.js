import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Qoutes';

// end imports

function App() {
  return (
    <div className="App">

      <div className="Container">
        <Calculator />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
