import './App.css';
import NavBar from './components/nav/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Bienvenidos a la coder app!"></ItemListContainer>
    </div>
  );
}

export default App;
