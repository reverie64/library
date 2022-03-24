import Card from "./components/Card";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
  <Navbar />
  <div id="container">
            <div id="bookshelf"><h2>my bookshelf!</h2>
            <Card />
            </div>
        </div>

    </div>
  );
}

export default App;
