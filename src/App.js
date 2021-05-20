import './App.css';
import Payeepage from './components/payeepage';
import Searchbar from "./components/searchbar.js";
import Hitlist from './components/searchlist';

function App() {
  return (
    <div className="App">
     

     <Searchbar />

     <Payeepage />

     <Hitlist />

    </div>
  );
}

export default App;
