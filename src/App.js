import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'




function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer name="Mauricio Lopez"/>
      </div>
  );
}

export default App;
