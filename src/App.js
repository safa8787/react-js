import logo from './logo.svg';
import './App.css';
import Formulaire from './Component/Formulaire';
import Navb from './Component/Navbar';
import Footera from './Component/Footera';

function App() {
  return (
    <div className="App">
     <Navb/>
      <Formulaire/>
      <Footera/>
    </div>
  );
}

export default App;
