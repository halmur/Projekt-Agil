import logo from './media/coolfashion.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main className="App-main">
        <p>
          Projekt Agil (Scrum) Webbutveckling i JavaScript
        </p>
      </main>

      <footer className="App-footer">
        <a
          className="App-link"
          href="https://github.com/halmur/Projekt-Agil"
          target="_blank"
          rel="noopener noreferrer"
        >
         meet the projekt
        </a>
      </footer>
    </div>
  );
}

export default App;
