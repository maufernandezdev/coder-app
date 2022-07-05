import './App.css';
import NavBar from './components/nav/NavBar';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/cartContainer/CartContainer'
import NotFound from './components/notFound/NotFound';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a la coder app!"></ItemListContainer>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/cart' element={<CartContainer></CartContainer>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
