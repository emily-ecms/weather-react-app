
import './App.css';

import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>My weather App </h1>
        <Weather />
        <Footer />
      </header>
      </div>
    </div>
  );
}

export default App;
