import './App.css';
import { Hello } from './components/Hello';
import { Hello2 } from './components/Hello2';

function App() {
  return (
    <div className="App" htmlfor="label">
      <header className="App-header">
        <Hello text="Oi"/>
        <Hello text="teste"/>
        <Hello2 text="tudo bem?"/>
        <Hello2 text="teste do hello 2?"/>
      </header>
    </div>
  );
}

export default App;
