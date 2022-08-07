import './App.css';
import ShopProvider from './context/cartContext';
import MainNavigator from './navigation/MainNavigator';

function App() {
  return (
    <ShopProvider>
      <MainNavigator/>
    </ShopProvider>
  );
}

export default App;
