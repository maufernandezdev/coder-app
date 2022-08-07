import React from 'react';
import NavBar from '../components/nav/NavBar';
import ItemListContainer from '../containers/itemListContainer/ItemListContainer';
import ItemDetailContainer from '../containers/itemDetailContainer/ItemDetailContainer';
import CartContainer from '../containers/cartContainer/CartContainer'
import NotFound from '../components/notFound/NotFound';
import CartForm from '../components/cartform/CartForm';
import Success from '../components/success/Success'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

const MainNavigator = () => {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Productos destacados"></ItemListContainer>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/cart' element={<CartContainer></CartContainer>}></Route>
          <Route path='/checkout' element={<CartForm></CartForm>}></Route>
          <Route path='/success' element={<Success></Success>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default MainNavigator