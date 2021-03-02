import "./App.css";
import Picture from "./components/Picture";

function App() {
  return (
    <div className="App">
      <header className="header">NASA Astronomy Picture Of The Day</header>
      <div className="container">
        <Picture />
      </div>
    </div>
  );
}

export default App;
