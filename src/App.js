import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/Kerrigan1337/dictionary-project">
              Kerry Murphy
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
