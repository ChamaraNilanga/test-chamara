import './App.css';
import products from '../src/db.json';
import ProductCard from './Components/ProductCard/ProductCard';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <DashBoard/>
    </div>
  );
}

export default App;
